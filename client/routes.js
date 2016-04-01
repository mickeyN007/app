angular.module('socially').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('info', {
      url: '/info',
      template: '<info-details></info-details>'
    })
    .state('home', {
      url: '/home',
      template: '<home></home>'
    })
     .state('report', {
      url: '/report',
      template: '<report></report>'
    })
    .state('add', {
      url: '/add/:pname',
      template: '<add-details></add-details>'
    })
    .state('list', {
      url: '/list',
      template: '<list></list>'
    });


  $urlRouterProvider.otherwise("/home");
});
