 angular.module('GeoApp')
            .controller('HomeCtrl', function( $scope,$http){
     
     
     
     $http.get('api/users').success(function(data,status,headers,config){
         console.log(data);
     })
     error(function(data,status,headers,config){
     
     });
     
     $http.post('/api/users',{name:'Amod'}).success(function
                        
 });