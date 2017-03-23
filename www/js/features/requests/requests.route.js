angular
  .module('landlordTenant.requests')
  .config(requestsConfig);

function requestsConfig($stateProvider) {
  $stateProvider.state({
    name: 'requests',
    url: '/requests',
    templateUrl: 'js/features/requests/requests.html',
    controller: 'RequestsCtrl',
    controllerAs: 'RequestsVM'
  })
}
