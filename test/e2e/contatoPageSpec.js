var ContatoPage = new require('./pages/contatoPage');

describe('Cadastro de contatos', function () {
    var pagina = new ContatoPage();
    
    beforeEach(function () {
        pagina.visitar();
    })
    
    it('Deve cadastrar um contato', function() {
        var aleatorio = Math.floor((Math.random() * 1000000) + 1)
          , nome = 'teste' + aleatorio
          , email = nome + '@email.com'
          ;
        
        pagina.digitarNome(nome);
        pagina.digitarEmail(email);
        pagina.selecionarPrimeiraEmergenciaDaLista() //não achou o elemento
        pagina.salvar();
        expect(pagina.obterMensagem()).toContain('sucesso');
    });  
});