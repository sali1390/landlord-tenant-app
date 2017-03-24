angular
  .module('landlordTenant.requests')
  .controller('RequestsCtrl', RequestsCtrl);

function RequestsCtrl($http, $state) {
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
    url: '/api/requests'
  }).then(function successCallback(res) {
    console.log(res);

    var requests = [];

    for(var i = 0; i < res.data.length; i++) {
      if (res.data[i].property_id[0].landlord_id[0] == userId) {

        requests.push(res.data[i]);

        vm.requests = requests;

      } else {
      }
    }
  });

}
