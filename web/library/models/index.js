const mongoose = require('mongoose');

mongoose.connect($CONFIG.db.mongodb.uri,{useNewUrlParser: true},function (err) {
    err ? console.error('MongoDB 数据库链接失败') : console.log('MongoDB init done');
    if(err){
        process.exit(1)
    }

});