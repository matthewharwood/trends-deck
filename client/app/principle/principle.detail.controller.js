'use strict';

angular.module('trendsDeckApp')
  .controller('PrincipleDetailCtrl', function ($scope, $state, $timeout,VisDataSet, Scenes) {
    $scope.$state = $state;
    console.log('hey');
    $scope.nodes = new vis.DataSet();
    $scope.edges = new vis.DataSet();
    // var network = new vis.Network($('#previewNetwork2')[0], $scope.network_data, $scope.network_options) || {};
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
      $scope.nodes.add($scope.scenes[$state.params.slug].trends);
    }, 1500);


    $scope.principleTwo = {
      title: 'Principle2',
      desc: 'Trends in2222 Digital, Social, Mobile, E-Commerce, and China'
    };
    console.log($scope.principleTwo);
    var network = new vis.Network($('#previewNetwork2')[0], $scope.network_data, $scope.network_options) || {};

    $timeout(function(){
        network.moveTo({scale:2, offset: {x: 1200, y: 800}, animation: { duration: 2500, easingFunction: 'easeInOutQuart'}});
        // var onSelect = $scope.onNodeSelect || function(prop) {};
        network.on('select', function(properties) {
            var nodeId = parseInt(this.getSelection().nodes);
            if(nodeId >= 0){
              if($state.current.name === 'principle'){
                $state.go('principle.detail',{slug: nodeId})
                
              }
              
            }
            
            
            console.log(nodeId, properties);
        });
    },2000);
    
  
  });







