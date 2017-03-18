angular
  .module('landlordTenant.login')
  .config(loginConfig);

function loginConfig($stateProvider) {
  $stateProvider.state({
    name: 'login',
    url: '/login',
    templateUrl: 'js/features/login/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'LoginVM'
  })
}
