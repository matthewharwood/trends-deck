'use strict';

angular.module('trendsDeckApp')
  .controller('PrincipleCtrl', function ($scope, $state, $timeout,VisDataSet, Scenes) {
    $scope.$state = $state;
    $scope.nodes = new vis.DataSet();
    $scope.edges = new vis.DataSet();

    $scope.network_data = {
        nodes: $scope.nodes,
        edges: $scope.edges
    };
    $scope.scenes = Scenes.getSceneData().data;

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

        repulsion: {
            nodeDistance: 181,
            centralGravity: 0.01,
            springLength: 500,
            springConstant: 0.05,
            damping: 0.3
        },

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
        }
      }
    $timeout(function() {
        $scope.edges.add([
          {from: '0', to: '1'},
          {from: '1', to: '2'},
          {from: '2', to: '3'},
          {from: '3', to: '4'},
        ]);
        $scope.nodes.add($scope.scenes);
        
    }, 1500);

    $scope.principle = {
      title: 'Principle',
      desc: 'Trends in Digital, Social, Mobile, E-Commerce, and China'
    };
    var container = $('#previewNetwork2');
    
    var network = new vis.Network(container[0], $scope.network_data, $scope.network_options);
    network.on('select', function(properties) {  
        var nodeId = parseInt(this.getSelection().nodes);
        this.focusOnNode(nodeId, [{scale: 3.5}, {animation: true }, {duration: 1000}, {easingFunction: 'linear'}])
        onSelect(properties);
    });

    // $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    //   //use this if needed
    // });
  });








