angular
  .module('landlordTenant.signin')
  .controller('SigninCtrl', SigninCtrl);

function SigninCtrl($http) {
  var vm = this;
  vm.userInfo = {};

  vm.continue = function(req, res) {

    sessionStorage.setItem('userEmail', vm.userInfo.email);
    sessionStorage.setItem('userPassword', vm.userInfo.password);

    var userEmail = sessionStorage.getItem('userEmail');

    console.log(userEmail);

    checkUser()
  };

  function checkUser(req, res) {
    $http({
      method: 'GET',
      url: '/api/landlords'
    }).then(function successCallback(res) {
      console.log(res);
      //for (i=0; i< res.data.length; i++){
      //  if (res.data[i].email == userEmail) {
      //    console.log("Login Success");
      //  } else {
      //    console.log("Login Failed");
      //  }
      //}
    })
  }
}
