var models = require('../models');
var model = exports.model = models.user_oauth;
var async = require('async');
var paging = require('../util/paging');

//保存
exports.save = function (m, callback) {
    m.save(callback);
};

//删除
exports.remove = function (id, callback) {
    model.remove({_id: id}, callback);
}

//修改
exports.update = function (id, doc, callback) {
    model.update({_id: id}, doc, callback);
}

//查询
exports.find = function (field, where, sort, limit, callback) {
    model.find(where, field).sort(sort).limit(limit).lean().exec(callback);
}

//查询All
exports.findAll = function (field, where, callback) {
    model.find(where, field).exec(callback);
};

exports.findAllByPrimary = function (field, where, callback) {
    model.find(where, field).read('primary').exec(callback);
};

//分页
exports.findByPage = function (field, where, sort, currentPage, pageSize, callback) {
    var data = {};
    async.parallel([
            function (callback) {
                model.find(where, field).sort(sort).skip((currentPage - 1) * pageSize).limit(pageSize).exec(function (err, doc) {
                    if (!err) {
                        data.list = doc;
                    }
                    callback(null, null);
                });
            },
            function (callback) {
                model.count(where, function (err, count) {
                    if (!err) {
                        data.total = count;
                    }
                    callback(null, null);
                });
            }
        ], function (err, results) {
            data.pages = paging.build(data.total, currentPage, pageSize, 2, 5);
            callback(data);
        }
    );
}
