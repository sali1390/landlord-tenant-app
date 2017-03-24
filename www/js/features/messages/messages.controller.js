angular
  .module('landlordTenant.messages')
  .controller('MessagesCtrl', MessagesCtrl);

function MessagesCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');

  console.log("Logged in as " + userEmail);

  if(userEmail === null) {
    $state.go('signin')
  }

  $http({
    method: 'GET',
    url: '/api/messages'
  }).then(function successCallback(res) {
    console.log(res.data);

    var messages = [];

    //for(var i = 0; i < res.data.length; i++) {
    //  if (res.data[i].sender_id == userId || res.data[i].recipient_id == userId) {
    //
    //    messages.push(res.data[i]);
    //
    //    vm.messages = messages;
    //
    //    console.log(messages)
    //
    //  } else {
    //  }
    //}
  });

}
