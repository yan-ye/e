const controllers = require('../controllers/byrs');
module.exports = function (app) {
  app.get('/byrs', controllers.byrs)
};
