angular
  .module('landlordTenant.newProperty')
  .config(NewPropertyConfig);

function NewPropertyConfig($stateProvider) {
  $stateProvider.state({
    name: 'newProperty',
    url: '/newProperty',
    templateUrl: 'js/features/newProperty/newProperty.html',
    controller: 'NewPropertyCtrl',
    controllerAs: 'NewPropertyVM'
  })
}
