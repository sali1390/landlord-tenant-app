angular
  .module('landlordTenant.tsignin')
  .controller('TSigninCtrl', TSigninCtrl);

function TSigninCtrl($http, $state) {
  var vm = this;
  vm.userInfo = {};

  vm.continue = function(req, res) {

    sessionStorage.setItem('userEmail', vm.userInfo.email);
    sessionStorage.setItem('userPassword', vm.userInfo.password);

    var userEmail = sessionStorage.getItem('userEmail');
    var userPassword = sessionStorage.getItem('userPassword');

    var userId;

    function checkUser() {
      $http({
        method: 'GET',
        url: '/api/tenants'
      }).then(function successCallback(res) {

        for (i = 0; i < res.data.length; i++) {
          if (res.data[i].email == userEmail && res.data[i].password == userPassword) {
            userId = res.data[i]._id;

            sessionStorage.setItem('propertyId', res.data[i].property_id[0]._id);
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('isLandlord', res.data[i].landlord);
            sessionStorage.setItem('userName', res.data[i].firstName);

            console.log("Prop id: " + res.data[i].property_id[0]._id);

            $state.go("trequests");

            return;
          } else {
            $state.go("signup")
          }
        }
      });
    }
    checkUser();
  };

  vm.signup = function() {
    $state.go("signup");
  }
}
