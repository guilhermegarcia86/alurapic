angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';

    var promisse = $http.get('v1/fotos');

    promisse
        .success(function(retorno){
            $scope.fotos = retorno;
        })
        .error(function(erros){
            console.log(erros);
        });
});