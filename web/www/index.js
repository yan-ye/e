const express = require('express');
const path = require('path');
const session = require('express-session');
const favicon = require('serve-favicon');
const app = express();
app.engine('.htm', require('ejs').renderFile); // 发动机 htm
app.set('views', path.join(__dirname, 'views')); //语言程序的视图目录或者数组目录
app.set('view engine', '.htm'); //引擎扩展
app.use(favicon(path.join(__dirname, 'public', 'favicon.jpg')));// 网站图标
app.use(express.static(path.join(__dirname, 'public'), {maxAge: '7 days'}));
app.use(session({
    secret: 'yan',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 604800000//1周
    }
}));

require('./routes')(app);//路由

app.use(function (err, req, res, next) {
    let status = err.status || err.statusCode;
    console.log(err);
    if(typeof status === "number" && status >= 500){
        res.status(status).render('404')
    }
    next();
});
app.use(function (req, res, next) {
    res.status(404).render('404');
});

var server = null;
exports.start = function (www_port) {
    server = app.listen(www_port,function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('http://localhost:1900', host, port);
    })
};


