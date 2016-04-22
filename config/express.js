var express = require ('express')
  , load = require ('express-load')
  , bodyParser = require('body-parser')
  ;

module.exports = function () {
    var app = express();
    
    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    
    load('models', {cwd: 'app'})    //cwd faz o load procurar as pastas models, controllers e views na pasta app e não na pasta raiz contatooh
        .then('controllers')
        .then('routes')
        .into(app);
    
    return app;
};