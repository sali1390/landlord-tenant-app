angular
  .module('landlordTenant.messages')
  .controller('MessagesCtrl', MessagesCtrl);

function MessagesCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');
  var PropertyId = sessionStorage.getItem('propertyId');

  console.log("Logged in as " + userEmail);

  if (userEmail === null) {
    $state.go('signin')
  }

  vm.continue = function() {
    $http({
      method: 'POST',
      url: '/api/requests',
      data: {
        title: vm.requestInfo.title,
        description: vm.requestInfo.description,
        tenant_id: vm.requestInfo.tenantid,
        property_id: vm.requestInfo.propertyid
      }
    }).then(function successCallback(res) {
      $state.go('trequests')
    })
  }
}
