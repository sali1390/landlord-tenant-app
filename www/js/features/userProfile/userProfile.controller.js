angular
  .module('landlordTenant.userProfile')
  .controller('UserProfileCtrl', UserProfileCtrl);

function UserProfileCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('lsignin')
  }

  $http({
    method: 'GET',
    url: '/api/landlords'
  }).then(function successCallback(res) {

    for(var i = 0; i < res.data.length; i++) {
      if (res.data[i]._id == userId) {

        vm.userInfo = res.data[i];

      }else {
      }
    }
  });

}
