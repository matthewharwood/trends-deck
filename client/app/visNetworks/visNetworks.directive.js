'use strict';

angular.module('trendsDeckApp').directive('visNetworks', function($timeout,$state) {
    return {
        restrict: 'E',
        require: '^ngModel',
        scope: {
            ngModel: '=',
            onSelect: '&',
            options: '='
        },
        link: function($scope, $element, $attrs, ngModel) {
            // console.log(ngModel)
            $($element[0]).css('height', $(document).height());
            
            var options = {scale:0.32, offset: {x: 451, y: 200}, animation: { duration: 2500, easingFunction: 'easeInOutQuart'}};
            var optionsLogo = {scale:0.52, offset: {x: 350, y: 150}, animation: { duration: 2500, easingFunction: 'easeInOutQuart'}};
            if($state.current.name === 'main'){
                var network = new vis.Network($element[0], $scope.ngModel, $scope.options || {});
                var onSelect = $scope.onSelect() || function(prop) {};
                network.on('select', function(properties) {
                    this.getScale();
                    var nodeId = parseInt(this.getSelection().nodes);
                    this.focusOnNode(nodeId, {scale: 3.5, animation: true});
                    onSelect(properties);
                });

                $timeout(function(){
                network.moveTo(optionsLogo);
                
                },3000);

                $timeout(function(){
                    network.moveTo(options);

                },7000);

            }
            


        }

    }
});
