const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

//社交平台验证和回调
var socialVerify = exports.socialVerify = function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    return cb(profile);
};
//
exports.socialCallback = function (req, res, user,err) {
    if(err){
        console.error('socialCallback', err, user);
    }

};

var github = new GitHubStrategy($CONFIG.web_login_auth.github,socialVerify);
passport.use(github);