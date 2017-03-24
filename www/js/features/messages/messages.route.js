angular
  .module('landlordTenant.messages')
  .config(messagesConfig);

function messagesConfig($stateProvider) {
  $stateProvider.state({
    name: 'messages',
    url: '/messages',
    templateUrl: 'js/features/messages/messages.html',
    controller: 'MessagesCtrl',
    controllerAs: 'MessagesVM'
  })
}
