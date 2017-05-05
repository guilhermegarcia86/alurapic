angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    var promisse = $http.get('v1/fotos');

    promisse
        .success(function(retorno){
            $scope.fotos = retorno;
        })
        .error(function(erros){
            console.log(erros);
        });

    $scope.remover = function(foto) {
        $http.delete('v1/fotos/' + foto._id)
            .success(function(){
                var indice = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indice, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
            })
            .error(function(erros){
                $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
            })
    };
});