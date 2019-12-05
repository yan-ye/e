const fs = require('fs');
const path = require('path');

exports.loadLang = function () {
    $CONFIG.support_template_language = {};
    $CONFIG.template_language = [];
    $CONFIG.text_language = {};
    var langPath = path.join(__dirname,'../../locales');
    fs.readdirSync(langPath).filter(function (t) {
        console.error(t,">>>>");
        if(/^\.*/.test(t) && t.lastIndexOf('.js') !== -1){
            return true
        }
        return false
    }).forEach(function (file) {
        let fileName = path.join(langPath,file);
        console.log('--> ' + fileName);
        require(fileName);
    });
    for(let key in $CONFIG.support_template_language){ // 支持模板语言
        if($CONFIG.template_language.indexOf($CONFIG.support_template_language[key]) === -1){
            $CONFIG.template_language.push($CONFIG.support_template_language[key])
        }
    }
    let lls = [];
    for(let key in $CONFIG.support_template_locales){// 支持模板本地化
        var o = $CONFIG.support_template_locales[key];
        if(o.ll){
            lls.push(o.ll)
        }
        $CONFIG.template_locales.push(o);
    }
    if($CONFIG.template_locales.length > 0) { //模板本地化安装order排序
        $CONFIG.template_locales.sort(function (a, b) {return a.order - b.order});
    }
    $CONFIG.route_locales_regex = new RegExp('^\/(' + lls.join('|') + ')(\/|$)', 'i');
    console.log('init template language ->', $CONFIG.template_language);
    console.log('init template locales ->', $CONFIG.template_locales);
    console.log('init route locales regex ->', $CONFIG.route_locales_regex);
};
exports.getRoutes = function (path) {
  var paths = [];
  paths.push(path);
  $CONFIG.template_locales.forEach(function (t) {
      if(t.ll){
          paths.push('/' + t.ll + path)
      }
  });
  console.error(paths);
  return paths;
};
