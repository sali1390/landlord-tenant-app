angular
  .module('landlordTenant.welcome')
  .config(welcomeConfig);

function welcomeConfig($stateProvider) {
  $stateProvider.state({
    name: 'welcome',
    url: '/welcome',
    templateUrl: 'js/features/welcome/welcome.html',
    controller: 'WelcomeCtrl',
    controllerAs: 'WelcomeVM'
  })
}
