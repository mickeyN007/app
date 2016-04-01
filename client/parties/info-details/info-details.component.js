angular.module('socially').directive('infoDetails', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/info-details/info-details.html',
    controllerAs: 'infoDetails',
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);
	this.newParty = {};
	
	this.cancel = () =>{
	   document.getElementById("change").style.display = "none";
           document.getElementById("in").style.display = "none";
	   document.getElementById("verify").style.display = "inline";
	   this.newParty = {};
	}

	this.toggle = () =>{
	   var state = document.getElementById("in").style.display;
	   if (state == "none")
             document.getElementById("in").style.display = "inline";
	   else
		document.getElementById("in").style.display = "none";
	}

        //var drA = Parties.findOne({username: "master"});
        //console.log(Parties.findOne({username: "master"}));
        this.sign = () => {
          if (Parties.findOne({username: "master"}).pass == this.newParty.pass){
                document.getElementById("verify").style.display = "none";
		document.getElementById("change").style.display = "inline";
		
	  }
          else {document.getElementById("status").style.display="inline";}
           this.newParty = {};
        };


	this.signb = () => {
         if (this.newParty.pass != '' && this.newParty.passb != ""){
          if (this.newParty.pass == this.newParty.passb){
		Parties.remove({_id: Parties.findOne({username: "master"})._id});
		Parties.insert({username: "master", pass: this.newParty.passb});
		window.location.href="/info";
	  }
	  else{
	   	document.getElementById("statusb").style.display = "inline";

          }
           this.newParty = {};}
        };

      this.helpers({
       drA: () => {
          return Aapt.find({pname: "Dr. Mangum"});
        },

	drB: () => {
          return Aapt.find({pname: "Dr. Johnson"});
        },

	drC: () => {
          return Aapt.find({pname: "Dr. Bullard"});
        },

	drD: () => {
          return Aapt.find({pname: "Mr. Snowden"});
        },
	drE: () => {
          return Aapt.find({pname: "Mr. Mouton"});
        }

      });
      
      this.removeParty = (party) => {
        Aapt.remove({_id: party._id});
      };
    }
  }
});
