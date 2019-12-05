const authentication = require('../../library/controlers/authentication');

module.exports = function (app) {
    app.use(authentication.index)
};