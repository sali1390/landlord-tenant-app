angular
  .module('landlordTenant.makeRequest')
  .config(makeRequestConfig);

function makeRequestConfig($stateProvider) {
  $stateProvider.state({
    name: 'makeRequest',
    url: '/makeRequest',
    templateUrl: 'js/features/makeRequest/makeRequest.html',
    controller: 'MakeRequestCtrl',
    controllerAs: 'MakeRequestVM'
  })
}
