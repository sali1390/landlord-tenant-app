angular
  .module('landlordTenant.login')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl() {
  var vm = this;
  vm.userInfo = {}

  vm.continue = function(req, res) {
    vm.userInfo.email
    vm.userInfo.password

    sessionStorage.setItem('userEmail', vm.userInfo.email);
    sessionStorage.setItem('userPassword', vm.userInfo.password);

    var userEmail = sessionStorage.getItem('userEmail');

    console.log(userEmail)
  }
}
