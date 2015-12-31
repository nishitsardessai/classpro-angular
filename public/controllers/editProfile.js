 angular.module('GeoApp')
            .controller('EditProfileCtrl', function($scope,$routeParams, Users){
     Users.get({_id : $routeParams.id},function(data){
        $scope.person = data;
     });
     
     $scope.edit = function(){
        $scope.person = Users.get({_id : $routeParams.id},function(){
         $scope.person.name = "SSS";
            $scope.person.$save();
       
            
         });
         
     }
     
     
 });