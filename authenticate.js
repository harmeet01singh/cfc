const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./models/users');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

exports.local = passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

exports.getToken = function(user) {
    return jwt.sign(user, '12345-67890-09876-54321', { expiresIn: 3600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '12345-67890-09876-54321';

exports.jwtPassport = passport.use( new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("JWT payload: " + jwt_payload);

    Users.findOne({ _id: jwt_payload._id }, (err, user) => {
        if(err) {
            return done(err, false);
        }
        else if(user) {
            return done(null, user);
        }
        else{
            return done(null, false);
        }
    })
}));

exports.verifyUser = passport.authenticate('jwt', { session: false });