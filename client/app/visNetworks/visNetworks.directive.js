'use strict';

angular.module('trendsDeckApp').directive('visNetworks', function() {
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
                // console.log(this.getScale());
                var nodeId = parseInt(this.getSelection().nodes);
                console.log(this.focusOnNode(nodeId, {scale: 3.5, animation: true, duration: 1000, easingFunction: 'linear'}));
                // this.focusOnNode(nodeId, [{scale: 3.5}, {animation: true }, {duration: 1000}, {easingFunction: 'linear'}])
                onSelect(properties);
            });
            // $element.bind('click', function(e){console.log(e.pageX, e.pageY)});

        }

    }
});
