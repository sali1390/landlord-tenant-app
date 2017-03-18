angular
  .module('landlordTenant.properties')
  .config(propertiesConfig);

function propertiesConfig($stateProvider) {
  $stateProvider.state({
    name: 'properties',
    url: '/properties',
    templateUrl: 'js/features/properties/properties.html',
    controller: 'PropertiesCtrl',
    controllerAs: 'PropertiesVM'
  })
}
