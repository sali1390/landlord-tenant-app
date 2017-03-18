angular
  .module('landlordTenant.tenants')
  .config(tenantsConfig);

function tenantsConfig($stateProvider) {
  $stateProvider.state({
    name: 'tenants',
    url: '/tenants',
    templateUrl: 'js/features/tenants/tenants.html',
    controller: 'TenantsCtrl',
    controllerAs: 'TenantsVM'
  })
}
