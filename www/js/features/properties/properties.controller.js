angular
  .module('landlordTenant.properties')
  .controller('PropertiesCtrl', PropertiesCtrl);

function PropertiesCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('signin')
  }

  $http({
    method: 'GET',
    url: '/api/properties'
  }).then(function successCallback(res) {
    console.log(res);

    var properties = [];

    for(var i = 0; i < res.data.length; i++) {
      if (res.data[i].email == userEmail) {
        for(var j = 0; j < res.data[i].properties.length; j++) {
          properties.push(res.data[i].properties[j]);
        }
        vm.properties = properties;

        console.log("Properties: " + JSON.stringify(properties));

        return;
      } else {

      }
    }
  });

}
