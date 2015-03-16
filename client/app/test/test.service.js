'use strict';

angular.module('perfectScoreApp')
  .factory('Test', function ($resource) {
    return $resource('/api/tests/:id', {
      id: '@_id'
    },{
        get: {
            isArray: true
       },
       create: {
           method: 'PUT',
       },
    });
  });
