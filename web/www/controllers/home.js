const path = require('path');
const fs = require('fs');
const util = require('util');

exports.index = function (req,res,next) {
    res.render('home');
}