angular
  .module('landlordTenant.signin')
  .config(signinConfig);

function signinConfig($stateProvider) {
  $stateProvider.state({
    name: 'signin',
    url: '/signin',
    templateUrl: 'js/features/signin/signin.html',
    controller: 'SigninCtrl',
    controllerAs: 'SigninVM'
  })
}
