const user = require('../controllers/user');
const localesService = require('../../library/services/locale');

module.exports = function (app) {
    app.get(localesService.getRoutes('/login'),user.get_login)
};
