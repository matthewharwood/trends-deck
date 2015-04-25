'use strict';

angular.module('trendsDeckApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('principle', {
        url: '/principle',
        templateUrl: 'app/principle/principle.html',
        controller: 'PrincipleCtrl'
      })
      .state('principle.detail', {
        url: '/{slug}',
        templateUrl: 'app/principle/principle.detail.html',
        controller: 'PrincipleCtrl',
        
      })
      .state('principle.detail.more', {
        url: '/more', 
      })
      .state('principle.detail.trend', {
        url: '/{trendSlug}',
        templateUrl: 'app/principle/principle.detail.html',
        controller: 'PrincipleCtrl'
      })
      .state('principle.detail.trend.more', {
        url: '/more'        
      });
  });