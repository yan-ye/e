const fs = require('fs');

module.exports = function (app) {
    require('./authentication')(app);
    require('../../library/routes/user_auth')(app);//身份验证
    require('./home')(app);
    require('./user')(app);
    require('./byrs')(app);
    require('./gscp')(app);
    require('./kjyf')(app);
    require('./news')(app);
    require('./lxwm')(app);
    require('./article')(app);
};