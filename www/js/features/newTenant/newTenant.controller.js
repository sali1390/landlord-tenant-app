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
      url: '/api/findtenants',
      data: {
        firstName: vm.tenInfo.firstName
      }
    }).then(function successCallback(res) {
      console.log(res.data);

      //var tenants = [];
      //
      //for(var i = 0; i < res.data.length; i++) {
      //
      //    tenants.push(res.data[i]);
      //
      //    vm.tenants = tenants;
      //
      //    console.log("Tenants: " + JSON.stringify(tenants));
      //
      //}


    })
  };

}
