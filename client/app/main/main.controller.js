'use strict';

angular.module('trendsDeckApp')
  .controller('MainCtrl', function ($scope, $http, socket, VisDataSet) {
    console.log(VisDataSet);
    $scope.nodes = new vis.DataSet();
    $scope.edges = new vis.DataSet();
    $scope.network_data = {
        nodes: $scope.nodes,
        edges: $scope.edges
    };
    $scope.nodesDetails = [
        {id: 1, label: 'Retail', group: 1,  details:'lorem ipsum'},
        {id: 2, label: 'Cultural Undercurrents', details: 'Cultural Undercurrents', group: 1},
        {id: 3, label: 'Principle 3' , group: 1},
        {id: 4, label: 'Principle 4' , group: 1},
        {id: 5, label: 'Principle 5' , group: 1},
        {id: 6, label: 'Trend 6' , group: 1},
        {id: 7, label: 'Trend 7' , group: 1},
        {id: 8, label: 'Trend 8' , group: 1}];

    // $scope.nodes.add($scope.nodesDetails);

    $scope.edges.add([
        {from: '1', to: '2'},
        {from: '1', to: '3'},
        {from: '1', to: '4'},
        {from: '1', to: '5'},
        {from: '2', to: '6'},
        {from: '2', to: '7'},
        {from: '2', to: '8'},
    ]);
    $scope.nodes.add($scope.nodesDetails);
    $scope.splash = {
      title: 'Levi\'s Trends',
      desc: 'Trends in Digital, Social, Mobile, E-Commerce, and China'
    };

    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
  });
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
