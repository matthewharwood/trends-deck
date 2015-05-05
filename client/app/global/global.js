'use strict';

angular.module('trendsDeckApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('global', {
        url: '/global',
        templateUrl: 'app/global/global.html',
        controller: 'GlobalCtrl'
      });
  });