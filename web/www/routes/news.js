const controllers = require('../controllers/news');
module.exports = function (app) {
  app.get('/news', controllers.news)
};
