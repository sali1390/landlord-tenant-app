angular
  .module('landlordTenant.properties')
  .controller('PropertiesCtrl', PropertiesCtrl);

function PropertiesCtrl($http) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');

  $http({
    method: 'GET',
    url: '/api/properties'
  }).then(function successCallback(res) {
    console.log(res);

    var properties = [];

    for (i = 0; i < res.data.length; i++) {
      if (res.data[i].email == userEmail) {
        properties.push(res.data[i].properties);

        vm.properties = properties;

        console.log("Properties: " + properties);

        return;
      } else {

      }
    }
  })
}
