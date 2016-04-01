angular.module('socially').directive('addDetails', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/add-details/add-details.html',
    controllerAs: 'addDetails',
    controller: function ($scope,$stateParams, $reactive) {
      $reactive(this).attach($scope);
      this.newParty = {};
      var pname = $stateParams.pname;
      document.getElementById('image').src = pname + ".jpg";
      this.newParty.pname = pname;
      this.helpers({
        parties: () => {
          return Aapt.find({});
        }
      });
      this.addParty = () => {
	if (document.getElementById("catg").checked)
	     var a = document.getElementById("catg").value;
        else var a = document.getElementById("catg2").value;
        this.newParty.category = a;
	Parties.insert(this.newParty);
        Aapt.insert(this.newParty);
        this.newParty = {};
      };
    }
  }
});
