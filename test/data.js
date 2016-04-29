var MongoClient = require('mongodb').MongoClient
  , contatos = [
      {nome: "XYZ", email: 'xyz@email.com.br'},
      {nome: "XYZ", email: 'xyz@email.com.br'},
      {nome: "XYZ", email: 'xyz@email.com.br'}
  ];

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh_test', function (erro, db) {
    if (erro) throw erro;
    
    db.dropDatabase(function (erro) {
        if (erro) return console.log(erro);
        console.log('Banco apagado com sucesso');
        db.collection('contatos').insert(contatos, function (erro, insert) {
            if (erro) return console.log(erro);
            console.log('Banco populado com sucesso');
            process.exit(0);
        });
    });
});