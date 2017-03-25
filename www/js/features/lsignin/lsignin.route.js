angular
  .module('landlordTenant.lsignin')
  .config(lsigninConfig);

function lsigninConfig($stateProvider) {
  $stateProvider.state({
    name: 'lsignin',
    url: '/lsignin',
    templateUrl: 'js/features/lsignin/lsignin.html',
    controller: 'LSigninCtrl',
    controllerAs: 'LSigninVM'
  })
}
