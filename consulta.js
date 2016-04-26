var MongoClient = require('mongodb').MongoClient
  , ObjectID = require('mongodb').ObjectID
  ;

var _idProcurado = new ObjectID('264124654651');

MongoClient.connect('mongodb://localhost:27017/contattoh', 
    function (erro, db) {
        if (erro) throw erro;
        db.collection('contatos').findOne({_id : _idProcurado},
            function (erro, contato) {
                if (erro) throw erro;
                console.log(contato);
            }        
        )
    }
)