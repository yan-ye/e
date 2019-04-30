var lang_replay = require('./util/lang').lang_reply;
var contributes = require('./contributes');

global.$CONFIG = {
    web_type : '',
    website:'yan-ye',
    default_language: 'zh-CN', //默认语言
    support_template_language:{},//支持模板语言
    template_language :[], //模板语言
    support_template_locales:{}, //支持模板本地化
    template_locales:[], //模板本地化 en zh-CN ...
    text_language :{}, //多语言文本
    support_tl_ll :{}, ///支持语言的 tl ll
    route_locales_regex: null
};