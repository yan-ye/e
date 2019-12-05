const home = require('../controllers/home');
const localesService = require('../../library/services/locale');
module.exports = function (app) {
    app.get(localesService.getRoutes('/'),home.index);
    app.get(localesService.getRoutes('/home'),home.index);
    app.get(localesService.getRoutes('/index.html'),home.index);
};