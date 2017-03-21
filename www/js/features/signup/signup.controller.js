angular
  .module('landlordTenant.signup')
  .controller('SignupCtrl', SignupCtrl);

function SignupCtrl($http, $state) {
  var vm = this;

  vm.landlordContinue = function(req, res) {
    $http({
      method: 'POST',
      url: '/api/landlords',
      data: {
        firstName: vm.userInfo.firstname,
        lastName: vm.userInfo.lastname,
        email: vm.userInfo.email,
        password: vm.userInfo.password
      }
    }).then(function successCallback(res) {
      $state.go("properties");
    })
  };

  vm.tenantContinue = function(req, res) {
    $http({
      method: 'POST',
      url: '/api/tenants',
      data: {
        firstName: vm.userInfo.firstname,
        lastName: vm.userInfo.lastname,
        email: vm.userInfo.email,
        password: vm.userInfo.password
      }
    }).then(function successCallback(res) {
      $state.go("properties");
    })
  };
}
