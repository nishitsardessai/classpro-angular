 angular.module('GeoApp')
            .controller('ProfileCtrl', function($scope,$routeParams, Users){
     Users.get({_id : $routeParams.id},function(data){
        $scope.name = data.name;
     });
     
     
 });