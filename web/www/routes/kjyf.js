const controllers = require('../controllers/kjyf');
module.exports = function (app) {
  app.get('/kjyf', controllers.kjyf)
};
