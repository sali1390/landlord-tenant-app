angular
  .module('landlordTenant.properties')
  .controller('PropertiesCtrl', PropertiesCtrl);

function PropertiesCtrl($http, $state) {
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
    url: '/api/properties'
  }).then(function successCallback(res) {

    console.log(res)

    var properties = [];

    for(var i = 0; i < res.data.length; i++) {
      if (res.data[i].landlord_id == userId) {
          properties.push(res.data[i]);

          vm.properties = properties
      }else {
      }
    }
  });

  vm.newProperty = function() {
    $state.go('newProperty')
  }

}
