angular.module('contatooh').controller('ContatoController', function ($scope, $routeParams, Contato) {
    if ($routeParams.contatoId) {
        Contato.get({id: $routeParams.contatoId},
            function (contato) {
                $scope.contato = contato;
            },
            function (erro) {
                $scope.mensagem = {
                    texto: 'Não foi possivel obter o contato.'
                };
                console.log(erro);
            }
        );
    }
    else {
        $scope.contato = new Contato();
    }
    
    $scope.salva = function () {
        $scope.contato.$save() //internamente faz um POST para /contatos
            .then(function () {
                $scope.mensagem = {texto: 'Salvo com sucesso'};
                $scope.contato = new Contato(); //limpa o formulario
                $scope.$broadcast('contatoSalvo');
            })
            .catch (function () {
                $scope.mensagem = {texto: 'Não foi possível salvar'};
            });
    };
    
    Contato.query(function (contatos) {
        $scope.contatos = contatos;
    });
});