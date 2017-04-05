angular
  .module('landlordTenant.newProperty')
  .controller('NewPropertyCtrl', NewPropertyCtrl);

function NewPropertyCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('signin', {})
  }

  vm.propContinue = function(req, res) {
    $http({
      method: 'POST',
      url: '/api/properties',
      data: {
        streetAddress: vm.propInfo.streetAddress,
        city: vm.propInfo.city,
        state: vm.propInfo.state,
        zip: vm.propInfo.zip,
        landlordid: userId
      }
    }).then(function successCallback(res) {
      console.log("success");

      $state.go("properties", {});
    })
  };

}
