angular
  .module('landlordTenant.tenants')
  .controller('TenantsCtrl', TenantsCtrl);

function TenantsCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('signin')
  }

  $http({
    method: 'GET',
    url: '/api/tenants'
  }).then(function successCallback(res) {
    console.log(res);

    var tenants = [];

    for(var i = 0; i < res.data.length; i++) {
      if (res.data[i].landlord_id == userId) {
        tenants.push(res.data[i]);

        vm.tenants = tenants;

        console.log("Tenants: " + JSON.stringify(tenants));

      } else {

      }
    }
  });

  vm.newTenant = function() {
    $state.go('newTenant')
  }
}
