angular
  .module('landlordTenant.trequests')
  .config(trequestsConfig);

function trequestsConfig($stateProvider) {
  $stateProvider.state({
    name: 'trequests',
    url: '/trequests',
    templateUrl: 'js/features/trequests/trequests.html',
    controller: 'TRequestsCtrl',
    controllerAs: 'TRequestsVM'
  })
}
