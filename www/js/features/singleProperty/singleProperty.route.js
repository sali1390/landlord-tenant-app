angular
  .module('landlordTenant.singleProperty')
  .config(SinglePropertyConfig);

function SinglePropertyConfig($stateProvider) {
  $stateProvider.state({
    name: 'singleProperty',
    url: '/singleProperty',
    templateUrl: 'js/features/singleProperty/singleProperty.html',
    controller: 'SinglePropertyCtrl',
    controllerAs: 'SinglePropertyVM'
  })
}
