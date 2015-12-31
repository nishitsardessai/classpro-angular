angular.module('GeoApp')
  .factory('Users', function($resource) {
    return $resource('/api/users/:_id');
    //GET /api/users
    //GET /api/users/:id
    //POST /api/users
    //PUT /api/users/:id
    //DELETE /api/users/:id
  });