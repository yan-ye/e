const fs = require('fs');

module.exports = function (app) {
    require('./authentication')(app);
    require('./home')(app);
};