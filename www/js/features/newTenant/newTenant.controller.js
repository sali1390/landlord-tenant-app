angular
  .module('landlordTenant.newTenant')
  .controller('NewTenantCtrl', NewTenantCtrl);

function NewTenantCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('signin', {})
  }

  vm.tenContinue = function(req, res) {
    $http({
      method: 'GET',
      url: '/api/tenants'
    }).then(function successCallback(res) {

      var tenants = [];

      for(var i = 0; i < res.data.length; i++) {
        if (res.data[i].landlord_id != userId && res.data[i].firstName == vm.tenInfo.firstName && res.data[i].lastName == vm.tenInfo.lastName) {
          tenants.push(res.data[i]);

          vm.tenants = tenants;

          console.log(tenants);

          selectProperty();
        }else {

        }
      }
    })
  };

}
