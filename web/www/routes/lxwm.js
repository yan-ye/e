const controllers = require('../controllers/lxwm');
module.exports = function (app) {
  app.get('/lxwm', controllers.lxwm)
};
