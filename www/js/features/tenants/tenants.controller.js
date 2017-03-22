angular
  .module('landlordTenant.tenants')
  .controller('TenantsCtrl', TenantsCtrl);

function TenantsCtrl($http) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');

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
      if (res.data[i].email == userEmail) {

        for(var j = 0; j < res.data[i].tenants.length; j++) {
          tenants.push(res.data[i].tenants[j]);
        }
        vm.tenants = tenants;

        console.log("Tenants: " + JSON.stringify(tenants));

        return;
      } else {

      }
    }
  });
}
