angular
  .module('landlordTenant.welcome')
  .controller('WelcomeCtrl', WelcomeCtrl);

function WelcomeCtrl($state) {
  var vm = this;

  vm.tenant = function() {
    $state.go("tsignin")
  };

  vm.landlord = function() {
    $state.go("lsignin");
  }
}
