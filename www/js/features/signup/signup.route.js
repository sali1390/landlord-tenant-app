angular
  .module('landlordTenant.signup')
  .config(signinConfig);

function signinConfig($stateProvider) {
  $stateProvider.state({
    name: 'signup',
    url: '/signup',
    templateUrl: 'js/features/signup/signup.html',
    controller: 'SignupCtrl',
    controllerAs: 'SignupVM'
  })
}
