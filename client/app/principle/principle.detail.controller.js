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
    
    var network = {};
    $timeout(function() {
      network = new vis.Network($('#previewNetwork2')[0], $scope.network_data, $scope.network_options) || {};
      $scope.nodes.add($scope.scenes[$state.params.slug].trends);
      $scope.edges.add([
          //trends 0
          {from: '100', to: '200'},
          {from: '200', to: '300'},
          {from: '300', to: '400'},
          {from: '400', to: '500'},
          
          //trends 1
          {from: '10', to: '11'},
          {from: '11', to: '12'},
          {from: '12', to: '13'},
          {from: '13', to: '14'},
          {from: '14', to: '15'},
          
          //trends 2
          {from:  '20', to: '21'},
          {from:  '21', to: '22'},
          {from:  '22', to: '23'},
          {from:  '23', to: '24'},
          {from:  '24', to: '25'},
          {from:  '25', to: '26'},

          //trends 3
          {from: '30', to: '31'},
          {from: '31', to: '32'},
          {from: '32', to: '33'},
          {from: '33', to: '34'},
          {from: '34', to: '35'},
          
        ]);
    }, 1500);

    $scope.principle = {
      title: $scope.scenes[$state.params.slug].label,
      desc: $scope.scenes[$state.params.slug].desc
    };
  
    

    $timeout(function(){
        network.moveTo({scale:1, offset: {x: ((window.innerWidth/2)+window.innerWidth/4), y: ((window.innerHeight/2)+window.innerHeight/10)}, animation: { duration: 2500, easingFunction: 'easeInOutQuart'}});
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








