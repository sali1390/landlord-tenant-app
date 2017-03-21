angular
  .module('landlordTenant.signup')
  .controller('SignupCtrl', SignupCtrl);

function SignupCtrl($http, $state) {
  var vm = this;

  vm.landlordContinue = function(req, res) {

    //function newLandlord() {
    //  $http({
    //    method: 'POST',
    //    url: '/api/landlords'
    //  }).then(function successCallback(res) {
    //    console.log(res);
    //    for (i = 0; i < res.data.length; i++) {
    //      if (res.data[i].email == userEmail && res.data[i].password == userPassword) {
    //        console.log("Login Success");
    //        $state.go("properties");
    //        return;
    //      } else {
    //        $stage.go("signup")
    //      }
    //    }
    //  })
    //}

    checkUser();
  }
}
