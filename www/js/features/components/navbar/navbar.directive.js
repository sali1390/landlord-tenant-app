angular
  .module('landlordTenant.component.navbar')
  .directive('navbar', NavbarDirective);

function NavbarDirective() {
  return {
    restrict: 'E',
    scope: {
      navbarData: '='
    },
    templateUrl: 'js/features/components/navbar/navbar.html',
    Controller: NavbarCtrl,
    ControllerAs: 'NavbarVM',
    bindToController: true
  }
}

function NavbarCtrl() {
  var vm = this;
}
