'use strict';

angular.module('trendsDeckApp')
  .controller('PrincipleCtrl', function ($scope, $state, $timeout, Scenes) {
    $scope.$state = $state;
    $scope.scenes = Scenes.getSceneData().data;
    
    
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      //use this if needed
    });
  });
