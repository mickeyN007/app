angular.module('socially').directive('home', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/parties/home/home.html',
    controllerAs: 'home',
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);
      this.newParty = {};
      //var drA = Parties.findOne({username: "master"});
      //console.log(Parties.findOne({username: "master"}));
      this.sign = () => {
        const { pass } = Meteor.settings.public;
        if (pass == this.newParty.pass)
        window.location.href="/info";
        else {alert("Wrong Password!");window.location.href="/home";}
      };
      this.clickMe = () => {
        document.getElementById("sign").style.display="inline";
      };
    }
  }
});
