 angular.module('GeoApp')
            .controller('UserCtrl', function( $scope, Users){
                $scope.name = "Sobin";
                $scope.age = 20;
                $scope.$watch('age',function(){
                    $scope.score = $scope.age*32;
                });
                console.log(Users.query());
                $scope.people = Users.query();
//                $scope.people = [
//                    {
//                        id: 1,
//                        name: "Sobin",
//                        age: 30,
//                        about: "He is a crazy guy",
//                        designation : "Founder"
//                    },
//                    {
//                        id: 2,
//                        name: "Amod",
//                        age : 21,
//                        about: "He is a crazy guy",
//                        designation : "CEO"
//                    },
//                    {
//                        id: 3,
//                        name: "Stanly",
//                        age: 41,
//                        about: "He is a crazy guy",
//                        designation : "COO"
//                    },
//                    {
//                        id: 4,
//                        name:"Nishit",
//                        age: 21,
//                        about: "He is a crazy guy",
//                        designation : "CEO"
//                    }
//                
//                ];

                $scope.add = function(){
                    
                    Users.save({
                            name: $scope.name,
                            age: $scope.age
                        });
                    $scope.people({
                            name: $scope.name,
                            age: $scope.age
                        });
                
                }
                $scope.remove = function(index){
                     $scope.people.splice(index,1);
                }
                
            
            
            });
            
            
        