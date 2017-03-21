angular
  .module('landlordTenant.component.property')
  .directive('property', PropertyDirective);

function PropertyDirective() {
  return {
    restrict: 'E',
    scope: {
      propertyData: '='
    },
    templateUrl: 'js/features/components/property/property.html',
    Controller: PropertyCtrl,
    ControllerAs: 'PropertyVM',
    bindToController: true
  }
}

function PropertyCtrl() {
  var vm = this;
}
