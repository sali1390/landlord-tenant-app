angular
  .module('landlordTenant.userProfile')
  .config(userProfileConfig);

function userProfileConfig($stateProvider) {
  $stateProvider.state({
    name: 'userProfile',
    url: '/userProfile',
    templateUrl: 'js/features/userProfile/userProfile.html',
    controller: 'UserProfileCtrl',
    controllerAs: 'UserProfileVM'
  })
}
