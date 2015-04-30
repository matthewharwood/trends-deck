'use strict';

angular.module('trendsDeckApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('principle', {
        url: '/principle',
        views: {
          '': {
            templateUrl: 'app/principle/principle.html',
            controller: 'PrincipleCtrl',
          },
          'graph@principle': {
            templateUrl: 'app/principle/principle.graph.html',
            controller: 'PrincipleCtrl',
          },
          'info@principle': {
            templateUrl: 'app/principle/principle.info.html'
          }

        }
        
       
      })
      .state('principle.detail', {
        url: '/{slug}',
        views: {
          "info@principle" : {
            templateUrl: 'app/principle/principle.detail.html',
            controller: 'PrincipleDetailCtrl'
          },
          'graph@principle': {
            templateUrl: 'app/principle/principle.graph.html',
            controller: 'PrincipleDetailCtrl'
          },
        }
      })
      .state('principle.detail.more', {
        url: '/more', 
      })
      .state('principle.detail.trend', {
        url: '/{trendSlug}',
        views: {
          'more@': {
            controller: 'PrincipleDetailTrendCtrl',
            templateUrl: 'app/principle/principle.detail.trend.html',
          }
        }
      })
      .state('principle.detail.trend.more', {
        url: '/more'        
      });
  });