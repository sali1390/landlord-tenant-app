angular
  .module('landlordTenant.newRequest')
  .config(NewRequestConfig);

function NewRequestConfig($stateProvider) {
  $stateProvider.state({
    name: 'newRequest',
    url: '/newRequest',
    templateUrl: 'js/features/newRequest/newRequest.html',
    controller: 'NewRequestCtrl',
    controllerAs: 'NewRequestVM'
  })
}
