'use strict';

angular.module('trendsDeckApp')
  .directive('history', function () {
    return {
     restrict: 'E',
      scope: {
          back: '@back',
          forward: '@forward',
          icons: '@icons'
      },
      link: function(scope, element, attrs) {
          
          $(element[0]).on('click', function() {
              history.back();
              scope.$apply();
          });
      }
    };
  });