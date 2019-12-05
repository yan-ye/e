const controllers = require('../controllers/article');
module.exports = function (app) {
    app.all('/article/cmd-:cmd', controllers.cmd)
}