angular.module('GeoApp', ['ngRoute','ngResource'])
  .config(function ($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl'
        })
        .when('/user/:id', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/user/edit/:id', {
            templateUrl: 'views/editProfile.html',
            controller: 'EditProfileCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});