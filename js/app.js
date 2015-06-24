var app = angular.module('app',[
  'ui.router'
])
app.config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/home")
      $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: 'first'
        })
        .state('home.item',{
            url: "/:item",
            templateUrl:"views/item.html",
            controller: function ($scope, $http, $stateParams){
              $scope.item=$stateParams.item
              $http.get('json/'+$scope.item+'.json').success(function(data){
                $scope.list=data;
              })
            }
        })
        .state('home.item.id',{
            url: "/:id",
            templateUrl:"views/item.detail.html",
            controller:function ($scope, $http, $stateParams){
                $scope.id=$stateParams.id
              }
          })

    })
app.controller('first', ['$scope',
  function($scope,  $stateParams){
    $scope.categories=[
      {name: 'shirts'},
      {name:'ears'},
      {name:'kimono'}
    ]
}])
