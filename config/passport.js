var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy
  , mongoose = require('mongoose')
  , config = require('./config')()
  ;

module.exports = function () {
    var Usuario = mongoose.model('Usuario')
      , githubCallback = 'http://' + config.domain + ':' + config.port + '/auth/github/callback'
      ;
    
    passport.use(new GitHubStrategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: githubCallback
    }, function (accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(   //Não tem suporte a promises
            {"login": profile.username},
            {"nome": profile.username},
            function (erro, usuario) {
                if (erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));
    
    passport.serializeUser(function (usuario, done) {
        done(null, usuario._id);
    });
    
    passport.deserializeUser(function (id, done) {
        Usuario.findById(id).exec()
            .then(function (usuario) {
                done(null, usuario);
        });
    });
};