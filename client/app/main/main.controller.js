'use strict';

var app = angular.module('trendsDeckApp')
  .controller('MainCtrl', function ($scope, $http, socket, VisDataSet, $timeout, Scenes) {
   
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
          // barnesHut: {
          //     enabled: true,
          //     gravitationalConstant: -2000,
          //     centralGravity: 0.1,
          //     springLength: 95,
          //     springConstant: 0.04,
          //     damping: 0.09
          // },
          repulsion: {
              nodeDistance: 181,
              centralGravity: 0.01,
              springLength: 500,
              springConstant: 0.05,
              damping: 0.3
          },
          // hierarchicalRepulsion: {
          //     centralGravity: 0.1,
          //     springLength: 150,
          //     springConstant: 0.005,
          //     nodeDistance: 160,
          //     damping: 0.09
          // }
  
        },
        // physics: {barnesHut: {enabled: false}, repulsion: {nodeDistance: 181}},
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
    console.log(Scenes.getTrendData())
    console.log(Scenes.getSceneData().test);
    console.log($scope.nodesDetails = Scenes.getSceneData().data);
    console.log($scope.nodesDetailsTwo = Scenes.getTrendData());
    console.log($scope.nodesDetailsThree = Scenes.getExampleData());

    // $scope.nodesDetails = [
    //     {id: 1, label: 'Retail', group: 1,  details:'lorem ipsum'},
    //     {id: 2, label: 'Cultural Undercurrents', details: 'Cultural Undercurrents', group: 1},
    //     {id: 3, label: 'Principle 3' , group: 1},
    //     {id: 4, label: 'Principle 4' , group: 1},
    //     {id: 5, label: 'Principle 5' , group: 1},
    //     {id: 6, label: 'Trend 6' , group: 1},
    //     {id: 7, label: 'Trend 7' , group: 1},
    //     {id: 8, label: 'Trend 8' , group: 1}];
    // console.log($scope.nodesDetails);
    // $scope.nodes.add($scope.nodesDetails);

    
    $timeout(function(){
    
    $scope.edges.add([
          //example 0
          {from: '100', to: '1001'},
          {from: '100', to: '1002'},
          {from: '100', to: '1003'},
          {from: '200', to: '2001'},
          {from: '200', to: '2002'},
          {from: '200', to: '2003'},
          {from: '300', to: '3001'},
          {from: '300', to: '3002'},
          {from: '300', to: '3003'},
          {from: '400', to: '4001'},
          {from: '400', to: '4002'},
          {from: '400', to: '4003'},
          {from: '500', to: '5001'},
          {from: '500', to: '5002'},
          {from: '500', to: '5003'},
          //example 1
          {from: '11', to: '111'},
          {from: '11', to: '112'},
          {from: '11', to: '113'},
          {from: '12', to: '121'},
          {from: '12', to: '122'},
          {from: '12', to: '123'},
          {from: '13', to: '131'},
          {from: '13', to: '132'},
          {from: '13', to: '133'},
          {from: '14', to: '141'},
          {from: '14', to: '142'},
          {from: '14', to: '143'},
          {from: '15', to: '151'},
          {from: '15', to: '152'},
          {from: '15', to: '153'},
          //example 2
          {from: '20', to: '201'},
          {from: '20', to: '202'},
          {from: '20', to: '203'},
          {from: '21', to: '211'},
          {from: '21', to: '212'},
          {from: '21', to: '213'},
          {from: '22', to: '221'},
          {from: '22', to: '222'},
          {from: '22', to: '223'},
          {from: '23', to: '231'},
          {from: '23', to: '232'},
          {from: '23', to: '233'},
          {from: '24', to: '241'},
          {from: '24', to: '242'},
          {from: '24', to: '243'},
          {from: '25', to: '251'},
          {from: '25', to: '252'},
          {from: '25', to: '253'},
          //example 3
          {from: '30', to: '301'},
          {from: '30', to: '302'},
          {from: '30', to: '303'},
          {from: '31', to: '311'},
          {from: '31', to: '312'},
          {from: '31', to: '313'},
          {from: '32', to: '321'},
          {from: '32', to: '322'},
          {from: '32', to: '323'},
          {from: '33', to: '331'},
          {from: '33', to: '332'},
          {from: '33', to: '333'},
          {from: '34', to: '341'},
          {from: '34', to: '342'},
          {from: '34', to: '343'},
          {from: '35', to: '351'},
          {from: '35', to: '352'},
          {from: '35', to: '353'},
          
          
        ]);
      $scope.nodes.add($scope.nodesDetailsThree); 
    },4500);
    $timeout(function(){
        $scope.edges.add([
          //trends 0
          {from: '0', to: '100'},
          {from: '0', to: '200'},
          {from: '0', to: '300'},
          {from: '0', to: '400'},
          {from: '0', to: '500'},
          //trends 1
          {from: '1', to: '10'},
          {from: '1', to: '11'},
          {from: '1', to: '12'},
          {from: '1', to: '12'},
          {from: '1', to: '12'},
          {from: '1', to: '15'},
          //trends 2
          {from: '2', to: '20'},
          {from: '2', to: '21'},
          {from: '2', to: '22'},
          {from: '2', to: '22'},
          {from: '2', to: '22'},
          {from: '2', to: '25'},
          //trends 3
          {from: '3', to: '30'},
          {from: '3', to: '31'},
          {from: '3', to: '32'},
          {from: '3', to: '32'},
          {from: '3', to: '32'},
          {from: '3', to: '35'}
        ]);
        $scope.nodes.add($scope.nodesDetailsTwo);
    },1000);

    $timeout(function() {
        $scope.edges.add([
          {from: '0', to: '1'},
          {from: '1', to: '2'},
          {from: '2', to: '3'},
          {from: '3', to: '4'},
        ]);
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


app.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // view -> model
            elm.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model -> view
            ctrl.render = function(value) {
                elm.html(value);
            };

            // load init value from DOM
            // ctrl.$setViewValue(elm.html());

            elm.bind('keydown', function(event) {
                console.log("keydown " + event.which);
                var esc = event.which == 27,
                    el = event.target;

                if (esc) {
                        console.log("esc");
                        ctrl.$setViewValue(elm.html());
                        el.blur();
                        event.preventDefault();                        
                    }
                    
            });
            
        }
    };
});