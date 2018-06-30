var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const config = require('../config/database')
    const User = require('../model/functions')
    const Ausers = require('../model/adminfunctions')
    module.exports = function(passport){
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
opts.secretOrKey = config.secret
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

    if(jwt_payload.level == 0){
        User.finduser(jwt_payload.email, function(err, user) {

            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }

    if(jwt_payload.level == 1){

        Ausers.finduser(jwt_payload.email, function(err, user) {

            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }
}))};