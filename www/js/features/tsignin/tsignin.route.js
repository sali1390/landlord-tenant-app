angular
  .module('landlordTenant.tsignin')
  .config(tsigninConfig);

function tsigninConfig($stateProvider) {
  $stateProvider.state({
    name: 'tsignin',
    url: '/tsignin',
    templateUrl: 'js/features/tsignin/tsignin.html',
    controller: 'TSigninCtrl',
    controllerAs: 'TSigninVM'
  })
}
