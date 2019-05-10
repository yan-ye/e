const fs = require('fs');

module.exports = function (app) {
    require('./authentication')(app);
    require('../../library/routes/user_auth')(app);//身份验证
    require('./home')(app);
    require('./user')(app);
};