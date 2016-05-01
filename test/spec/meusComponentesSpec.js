describe('meuBotaoAviso', function () {
    var $scope
      , element;
    
    beforeEach(function () {
        module('meusComponentes');
        inject(function ($rootScope, $compile) {
            $scope = $rootScope.$new();
            element = angular.element('<meu-botao-aviso nome="Remover" acao="remove()">');
            $compile(element)($scope);
            $scope.$digest();
        });
    });
    
    it('Deve criar um botão de aviso com texto e função', function () {
        expect(element.text()).toContain('Remover');
        expect(element.attr('acao')).toBe('remove()');
    });
});

describe('meuFocus', function () {
    var $scope
      , element
      , evento = 'contatoSalvo';
    
    beforeEach(function () {
        module('meusComponentes');
        inject(function ($rootScope, $compile) {
            $scope = $rootScope.$new();
            
            element = angular.element(
                '<button meu-focus evento="' + evento + '">Voltar</button>'
            );
            
            $compile(element)($scope);
            $scope.$digest();
        });
    });
    
    it('Deve focar o botão', function () {
        angular.element(document.body).append(element);
        $scope.$broadcast(evento);
        expect(angular.element(document.activeElement).text()).toBe('Voltar');
    });
});

describe('meuPainel', function () {
    var $scope
      , element
      ;
    
    beforeEach(function () {
        module('meusComponentes');
        module('templates');
        inject(function ($compile, $rootScope) {
            $scope = $rootScope.$new();
            element = angular.element(
                '<meu-painel titulo="Principal"><p>Oi</p></meu-painel>'
            );
            element = $compile(element)($scope);
            $scope.$digest();
        });
    });
    
    it('Deve construir um panel com transclude', function () {
        expect(element.html()).toContain('Principal');
        expect(element.html()).toContain('Oi');
    })
});