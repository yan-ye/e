const util = require('util');

exports.index = function (req, res, next) {
    res.locals.$_$ = {
        req_url: req.url,//请求url
        req_query: req.query,
        req_body:req.body,
        ua: req.headers['user-agent'],//用户UA
        html_lang:'',//页面模板语言标签
        mc_qs:'',//客户端hl,aid,flavor,cv,sv
        ga_insert: false//模板设置插入GA代码
    };
    //设置用户设置语言
        var ll_key = 'cn';
    if(req.query.hl && util.isString(req.query.hl) && $CONFIG.support_template_language[req.query.hl]){
      ll_key = $CONFIG.support_template_language[req.query.hl];
    }else if($CONFIG.route_locales_regex.test(req.url)){
      var ul = $CONFIG.route_locales_regex.exec(req.url);
      if(ul[1]){
        ll_key = ul[1].toLowerCase()
      }
    }

    //查找对应模板语言
    var locale = $CONFIG.support_template_locales[ll_key];
    if(locale && locale.ll){
        res.locals.x_ll = res.locals.$_$.x_ll = '/' + locale.ll;
        res.locals.x_ll_root = res.locals.$_$.x_ll_root = '/' + locale.ll + '/';
        res.locals.x_ll_key = res.locals.$_$.x_ll_key = locale.ll;
    }else{
        res.locals.x_ll = res.locals.$_$.x_ll = '';
        res.locals.x_ll_root = res.locals.$_$.x_ll_root = '/';
        res.locals.x_ll_key = res.locals.$_$.x_ll_key = ll_key;
    }
    let tl = locale.tl;
    res.locals.locale_language = locale;
    res.locals.$_$.display_language = res.locals.$_$.crawler_language = locale.crawler;
    res.locals.$_$.template_language = tl;  //模板语言
    res.locals.$_$.html_lang = locale.html_lang;  //html语言
    res.locals.$_$.date_format = locale.date_format; //时间格式 {format: 'YYYY年MM月DD日', tz: 'Asia/Shanghai'}
    res.locals.$_$.data_language = locale.dl;

    //VIEW闭包多语言模板数据
    String.prototype.format = function(){
        var args = arguments;
        return this.replace(/\{(\d+)\}/g,function(m,i,o,n){
            return args[i];
        });
    };
    // console.log(String.prototype.format.apply('{1}Download Variant {0}',[1111111111,22222222]))
    (function (o,tl) {
        o.$GET = o.$_$.$GET = function (key) {
            if(arguments.length === 1){
                return $CONFIG.text_language[tl][key]
            }
            return String.prototype.format.apply($CONFIG.text_language[tl][key], Array.prototype.slice.call(arguments, 1));
        };
        o.$GET_META = o.$_$.$GET_META = function (key, meta_type) {
            if (arguments.length == 2) {
                return $CONFIG.text_language[tl]['meta'][key][meta_type];
            }
            return String.prototype.format.apply(
                $CONFIG.text_language[tl]['meta'][key][meta_type],
                Array.prototype.slice.call(arguments, 2)
            );
        };

    })(res.locals,tl);
    next();
};
