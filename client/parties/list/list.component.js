angular.module('socially').directive('list', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/list/list.html',
    controllerAs: 'list',
    controller: function ($scope,$stateParams, $reactive) {
      $reactive(this).attach($scope);
      this.newParty = {};
      var id = $stateParams.id;
      this.helpers({
        parties: () => {
          return Parties.find({});
        }
      });
    }
  }
});
