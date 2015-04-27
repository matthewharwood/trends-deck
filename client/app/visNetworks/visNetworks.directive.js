'use strict';

angular.module('trendsDeckApp').directive('visNetworks', function($timeout) {
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
            var network = new vis.Network($element[0], $scope.ngModel, $scope.options || {});

            var onSelect = $scope.onSelect() || function(prop) {};
            network.on('select', function(properties) {
                console.log(this.getScale());
                var nodeId = parseInt(this.getSelection().nodes);
                console.log(this);
                console.log(this.focusOnNode(nodeId, {scale: 3.5, animation: true}));
                // this.focusOnNode(nodeId, [{scale: 3.5}, {animation: true }, {duration: 1000}, {easingFunction: 'linear'}])
                onSelect(properties);
            });
            
            var options = {scale:0.32, offset: {x: 451, y: 200}, animation: { duration: 2500, easingFunction: 'easeInOutQuart'}};
            var optionsLogo = {scale:0.52, offset: {x: 350, y: 150}, animation: { duration: 2500, easingFunction: 'easeInOutQuart'}};
            $timeout(function(){
                network.moveTo(optionsLogo);
                
            },3000);
            $timeout(function(){
                network.moveTo(options);

            },7000);


        }

    }
});
