'use strict';

angular.module('trendsDeckApp')
  .controller('MainCtrl', function ($scope, $http, socket, VisDataSet, $timeout) {
   
    //.*******                    ******* //
    // ******* visualization data *******.//
    //                .                   //
    
    $scope.nodes = new vis.DataSet();
    $scope.edges = new vis.DataSet();
    $scope.network_data = {
        nodes: $scope.nodes,
        edges: $scope.edges
    };
    $scope.network_options = {
        hierarchicalLayout: {
          enabled:false,
          levelSeparation: 150,
          nodeSpacing: 100,
          direction: "UD",
          layout: "hubsize"
        },
        tooltip: {
          delay: 300,
          fontColor: "#575757",
          fontSize: 14, // px
          fontFace: "verdana",
          color: {
            border: "#666",
            background: "#FFFFC6"
          }
        },
        smoothCurves: false,
        physics: {
          barnesHut: {
              enabled: true,
              gravitationalConstant: -2000,
              centralGravity: 0.1,
              springLength: 95,
              springConstant: 0.04,
              damping: 0.09
          },
          repulsion: {
              centralGravity: 0.1,
              springLength: 50,
              springConstant: 0.05,
              nodeDistance: 100,
              damping: 0.09
          },
          hierarchicalRepulsion: {
              centralGravity: 0.1,
              springLength: 150,
              springConstant: 0.005,
              nodeDistance: 160,
              damping: 0.09
          }
  
        },
        groups: {
          1: {
            shape: 'dot',
            fontColor: "#8c8c8c",
            fontFace: 'Source Sans Pro',
            fontSize: '12',
              color: {
                border: '#393939',
                background: '#393939',
                highlight: {
                  border: '#393939',
                  background: '#393939'
                }
              }
            }
          },
          onAdd: function(data,callback) {
            console.log('hey', data)
          },
          // navigation: true,
          // keyboard: {
          //   speed: {
          //     x: 10,
          //     y: 10,
          //     zoom: 0.02
          //   },
          //   bindToWindow: true
          // }
        }

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
    $timeout(function() {
        $scope.nodes.add($scope.nodesDetails);
    }, 1500);
    

    //.*******                    ******* //
    // ******* visualization data *******.//
    //                .                   //


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
