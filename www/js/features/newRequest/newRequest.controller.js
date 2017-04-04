angular
  .module('landlordTenant.newRequest')
  .controller('NewRequestCtrl', NewRequestCtrl);

function NewRequestCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');
  var propId = sessionStorage.getItem('propertyId');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('signin')
  }

  vm.propContinue = function(req, res) {
    $http({
      method: 'POST',
      url: '/api/requests',
      data: {
        title: vm.reqInfo.title,
        description: vm.reqInfo.description,
        tenantid: userId,
        propertyid: propId
      }
    }).then(function successCallback(res) {
      console.log("success");
      $state.go("trequests");
    })
  };

}
