angular.module('socially').directive('report', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/report/report.html',
    controllerAs: 'report',
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);


    }
  }
});
