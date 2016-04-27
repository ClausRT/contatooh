var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy
  , mongoose = require('mongoose')
  ;

module.exports = function () {
    var Usuario = mongoose.model('Usuario');
    
    passport.use(new GitHubStrategy({
        clientID: 'f1941e60dbe8c1b314eb',
        clientSecret: '56dc1ffcad6e752058c709ffa7c135b65566a2c7',
        callbackURL: 'http://localhost:3000/auth/github/callback'   //????
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