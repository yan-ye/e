const passport = require('passport');
const userService = require('../services/user');
module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/auth/github', passport.authenticate('github'));

    app.get('/auth/github/callback',function (req,res) {
        passport.authenticate('github',{ failureRedirect: '/login' }, function (err,user) {
          console.error(1111)
        })(req, res);
    });
};