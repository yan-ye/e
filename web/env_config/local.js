$CONFIG.db = {
    mongodb: {
        uri: 'mongodb://localhost/test'
    }
};
$CONFIG.web_login_auth = {
    github: {
        clientID: 'aaecf5fa79d1d076b9a3',
        clientSecret: 'ec7a3c1b96f0230c46fa5aabe5f391e1742acbce',
        callbackURL: "http://localhost:1900/auth/github/callback"
        // profileFields: ['id', 'displayName', 'name', 'profileUrl', 'birthday', 'photos', 'gender'],
        // passReqToCallback: true,
        // state: true
    }
};