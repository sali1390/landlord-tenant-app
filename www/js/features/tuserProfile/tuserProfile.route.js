angular
  .module('landlordTenant.tuserProfile')
  .config(tuserProfileConfig);

function tuserProfileConfig($stateProvider) {
  $stateProvider.state({
    name: 'tuserProfile',
    url: '/tuserProfile',
    templateUrl: 'js/features/tuserProfile/tuserProfile.html',
    controller: 'TUserProfileCtrl',
    controllerAs: 'TUserProfileVM'
  })
}
