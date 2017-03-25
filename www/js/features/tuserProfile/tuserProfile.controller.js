angular
  .module('landlordTenant.tuserProfile')
  .controller('TUserProfileCtrl', TUserProfileCtrl);

function TUserProfileCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('tsignin')
  }

  $http({
    method: 'GET',
    url: '/api/tenants'
  }).then(function successCallback(res) {

    for(var i = 0; i < res.data.length; i++) {
      if (res.data[i]._id == userId) {

        vm.userInfo = res.data[i];

      }else {
      }
    }
  });

}
