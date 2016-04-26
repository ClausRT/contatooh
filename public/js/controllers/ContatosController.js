//%scope é considerado o model no Angular.js
//M e C do MVC no mesmo lugar

angular.module('contatooh').controller('ContatosController', function (Contato, $scope) {
    $scope.contatos = [];
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};
    
    function buscaContatos () {
        Contato.query(  //Faz um GET internamente
            function (contatos) {
                $scope.contatos = contatos;
                $scope.mensagem = {};
            },
            function (erro) {
                $scope.mensagem = {texto: "Não foi possivel retornar contatos"};
                console.log(erro);
            }
        );   
    }
    
    buscaContatos();
    
    $scope.remove = function (contato) {
        Contato.delete({id: contato._id},   //delete nos permite dois callbacks, um para sucesso outro para falha
                    buscaContatos,
                    function (erro) {
                        $scope.mensagem = {texto: "Não foi possivel remover o contato"};
                        console.log(erro);
                    });
    };
    
    
});