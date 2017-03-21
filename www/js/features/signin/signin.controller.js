angular
  .module('landlordTenant.signin')
  .controller('SigninCtrl', SigninCtrl);

function SigninCtrl($http, $state) {
  var vm = this;
  vm.userInfo = {};

  vm.continue = function(req, res) {

    sessionStorage.setItem('userEmail', vm.userInfo.email);
    sessionStorage.setItem('userPassword', vm.userInfo.password);

    var userEmail = sessionStorage.getItem('userEmail');
    var userPassword = sessionStorage.getItem('userPassword');

    console.log(userEmail);

    function checkUser() {
      $http({
        method: 'GET',
        url: '/api/landlords'
      }).then(function successCallback(res) {
        console.log(res);
        for (i = 0; i < res.data.length; i++) {
          if (res.data[i].email == userEmail && res.data[i].password == userPassword) {
            console.log("Login Success");
            $state.go("properties");
            return;
          } else {
            $state.go("signup")
          }
        }
      })
    }

    checkUser();
  };

  vm.signup = function() {
    $state.go("signup");
  }
}
