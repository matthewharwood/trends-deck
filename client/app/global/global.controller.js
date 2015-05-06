'use strict';

angular.module('trendsDeckApp')
  .controller('GlobalCtrl', function ($scope, $previousState, $state) {
    $scope.message = 'Hello';
    $previousState.memo('goBack');
    $scope.goBack = function(){
    if ($previousState.get() === null){
        $state.go('main');
      } else {
        $previousState.go('goBack'); 
      };
    };

    $scope.pages = 5;
    $scope.currentPage = 0;
    
    //fix this
    $scope.pagenateGlobal = function(enums){
      switch(enums){
        case -1:
          if($scope.currentPage === 0){
            $scope.currentPage = $scope.pages;
          } else {
            $scope.currentPage--;
          }
          break;
        case 1:
           if($scope.currentPage === $scope.pages){
            $scope.currentPage = 0;
          } else {
            $scope.currentPage++;
          }
          break;
      }
    };
//    $scope.pagenateGlobal = function(enums){
//        if(enums === 1 && $scope.currentPage < $scope.pages){
//          $scope.currentPage++;
//          
//        } else if( $scope.currentPage = $scope.pages) {
//          $scope.currentPage = 0;
//          
//        } else {
//          $scope.currentPage--;
//        }
//        console.log($scope.currentPage);
//    };
    
    $scope.globalState = {};
    $scope.globalState.digital = {
      overview: [
        {
          title: 'people using the internet',
          start: 0,
          end: 3,
          suffix: 'billion',
          details: {
            title: 'penetration +21% YOY',
            start: 0,
            end: 40,
            suffix: "%"
          }
        },
        {
          title: 'active social media accounts',
          start: 0,
          end: 2.078,
          suffix: 'billion',
          details: {
            title: 'penetration +12% YOY',
            start: 0,
            end: 29,
            suffix: "%"
          }
        },
        {
          title: 'unique mobile users',
          start: 0,
          end: 3.649,
          suffix: 'billion',
          details: {
            title: 'penetration +5% YOY',
            start: 0,
            end: 51,
            suffix: "%"
          }
        },
        {
          title: 'active mobile users',
          start: 0,
          end: 1.685,
          suffix: 'billion',
          details: {
            title: 'penetration +23% YOY',
            start: 0,
            end: 23,
            suffix: "%"
          }
        }
      ],
      traffic: [
        {
          title: 'laptop/desktop - 13% yoy',
          start: 0,
          end: 66,
          suffix: '%',
        },
        {
          title: 'mobile phones +39% yoy',
          start: 0,
          end: 31,
          suffix: '%',
        },
        {
          title: 'tablets +17% yoy',
          start: 0,
          end: 7,
          suffix: '%',
        }
      ]
    };
    $scope.globalState.social = {
      region: [
        {
          title: 'east asia',
          start: 0,
          end: 690,
          suffix: 'm',
          details: {
            title: 'penetration',
            start: 0,
            end: 45,
            suffix: "%"
          }
        },
        {
          title: 'north america',
          start: 0,
          end: 206,
          suffix: 'm',
          details: {
            title: 'penetration',
            start: 0,
            end: 58,
            suffix: "%"
          }
        },
        {
          title: 'southeast asia',
          start: 0,
          end: 199,
          suffix: 'm',
          details: {
            title: 'penetration',
            start: 0,
            end: 32,
            suffix: "%"
          }
        },
        {
          title: 'south america',
          start: 0,
          end: 197,
          suffix: 'm',
          details: {
            title: 'penetration',
            start: 0,
            end: 48,
            suffix: "%"
          }
        },
        {
          title: 'western europe',
          start: 0,
          end: 197,
          suffix: 'm',
          details: {
            title: 'penetration',
            start: 0,
            end: 45,
            suffix: "%"
          }
        },
        
      ],
      platform: [
        {
          title: 'facebook',
          start: 0,
          end: 1.415,
          suffix: 'B',
        },
        {
          title: 'QQ',
          start: 0,
          end: 929,
          suffix: 'M',
        },
        {
          title: 'whatsapp',
          start: 0,
          end: 700,
          suffix: 'M',
        },
        {
          title: 'qzone',
          start: 0,
          end: 629,
          suffix: 'M',
        },
        {
          title: 'fb messenger',
          start: 0,
          end: 500,
          suffix: 'M',
        },
        {
          title: 'wechat',
          start: 0,
          end: 468,
          suffix: 'M',
        },
        {
          title: 'linkedin',
          start: 0,
          end: 347,
          suffix: 'M',
        },
        {
          title: 'google +',
          start: 0,
          end: 300,
          suffix: 'M',
        },
        {
          title: 'baidu tieba',
          start: 0,
          end: 300,
          suffix: 'M',
        },
        {
          title: 'twitter',
          start: 0,
          end: 288,
          suffix: 'M',
        },
        {
          title: 'viber',
          start: 0,
          end: 236,
          suffix: 'M',
        },
        {
          title: 'tumblr',
          start: 0,
          end: 230,
          suffix: 'M',
        },
        {
          title: 'snapchat',
          start: 0,
          end: 200,
          suffix: 'M',
        },
        {
          title: 'line',
          start: 0,
          end: 181,
          suffix: 'M',
        },
        {
          title: 'sina weibo',
          start: 0,
          end: 167,
          suffix: 'M',
        },
      ]
    };
    $scope.globalState.mobile = {
       country:[
         {
           title: 'south korea',
           start: 0,
           end: 37,
           suffix: '%',
         },
         {
           title: 'china',
           start: 0,
           end: 27,
           suffix: '%',
         },
         {
           title: 'uae',
           start: 0,
           end: 27,
           suffix: '%',
         },
         {
           title: 'singapore',
           start: 0,
           end: 23,
           suffix: '%',
         },
         {
           title: 'hong kong',
           start: 0,
           end: 23,
           suffix: '%',
         },
         {
           title: 'germany',
           start: 0,
           end: 20,
           suffix: '%',
         },
         {
           title: 'turkey',
           start: 0,
           end: 19,
           suffix: '%',
         },
         {
           title: 'malaysia',
           start: 0,
           end: 18,
           suffix: '%',
         },
         {
           title: 'uk',
           start: 0,
           end: 18,
           suffix: '%',
         },
         {
           title: 'usa',
           start: 0,
           end: 18,
           suffix: '%',
         },
       ]
      
    };
    $scope.globalState.ecomm = {
       mobile:[
         {
           title: 'uk',
           start: 0,
           end: 37,
           suffix: '%',
         },
         {
           title: 'germany',
           start: 0,
           end: 27,
           suffix: '%',
         },
         {
           title: 'south korea',
           start: 0,
           end: 27,
           suffix: '%',
         },
         {
           title: 'usa',
           start: 0,
           end: 23,
           suffix: '%',
         },
         {
           title: 'australia',
           start: 0,
           end: 23,
           suffix: '%',
         },
         {
           title: 'canada',
           start: 0,
           end: 20,
           suffix: '%',
         },
         {
           title: 'france',
           start: 0,
           end: 19,
           suffix: '%',
         },
         {
           title: 'singapore',
           start: 0,
           end: 18,
           suffix: '%',
         },
         {
           title: 'uae',
           start: 0,
           end: 18,
           suffix: '%',
         },
         {
           title: 'spain',
           start: 0,
           end: 18,
           suffix: '%',
         },
       ],
       desktop:[
         {
           title: 'uk',
           start: 0,
           end: 69,
           suffix: '%',
         },
         {
           title: 'germany',
           start: 0,
           end: 63,
           suffix: '%',
         },
         {
           title: 'south korea',
           start: 0,
           end: 62,
           suffix: '%',
         },
         {
           title: 'usa',
           start: 0,
           end: 56,
           suffix: '%',
         },
         {
           title: 'australia',
           start: 0,
           end: 51,
           suffix: '%',
         },
         {
           title: 'canada',
           start: 0,
           end: 49,
           suffix: '%',
         },
         {
           title: 'france',
           start: 0,
           end: 19,
           suffix: '%',
         },
         {
           title: 'singapore',
           start: 0,
           end: 46,
           suffix: '%',
         },
         {
           title: 'uae',
           start: 0,
           end: 45,
           suffix: '%',
         },
         {
           title: 'spain',
           start: 0,
           end: 44,
           suffix: '%',
         },
       ]
      
    };
    
  });
