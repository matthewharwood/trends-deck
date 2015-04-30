angular.module('trendsDeckApp')
  .controller('PrincipleDetailTrendCtrl', function ($scope, $state, Scenes) {
    $scope.scenes = Scenes.getSceneData().data;
    // if($state)
    $scope.$state = $state;
    // $scope.currentSlug = 
    console.log($state.params.slug)
    if($state.params.slug === '0'){

      $scope.currentSlug = ($state.params.trendSlug.charAt(0)-1);
    } else {
      $scope.currentSlug = $state.params.trendSlug.substr($state.params.trendSlug.length-1);
    }

});