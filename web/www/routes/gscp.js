const controllers = require('../controllers/gscp');
module.exports = function (app) {
  app.get('/gscp', controllers.gscp)
};
