angular
  .module('landlordTenant.newTenant')
  .config(NewTenantConfig);

function NewTenantConfig($stateProvider) {
  $stateProvider.state({
    name: 'newTenant',
    url: '/newTenant',
    templateUrl: 'js/features/newTenant/newTenant.html',
    controller: 'NewTenantCtrl',
    controllerAs: 'NewTenantVM'
  })
}
