var userId = sessionStorage.getItem('userId');
var userName = sessionStorage.getItem('userName');
var targetUser = sessionStorage.getItem('targetUser');

var chat = angular.module('BasicChat', ['chat']);

angular.module('chat').constant('config', {
  rltm: {
    service: "pubnub",
    config: {
      "publishKey": "pub-c-cae577e9-3c34-4411-b03c-6d045ecf5b35",
      "subscribeKey": "sub-c-991ba24a-1029-11e7-b568-0619f8945a4f"
    }
  }
});

chat.controller( 'chat', [ 'Messages', '$scope', function( Messages, $scope ) {
  // Message Inbox
  $scope.messages = [];
  // Receive Messages
  Messages.receive(function(message) {
    $scope.messages.push(message);
  });
  // Send Messages
  $scope.send = function() {
    Messages.send({
      data: $scope.textbox
    });
  };
}]);

Messages.user({ id: userId, name : userName });

Messages.send({ to: targetUser, data : message_body });
