// Business Logic
var pingPongArray = [];

var pingPong = function(numbers) {
  for (var i = 1; i <= numbers; i++) {
    if (i % 15 === 0) {
      pingPongArray.push ("PING PONG!");
    } else if (i % 5 === 0) {
      pingPongArray.push ("PONG!");
    } else if (i % 3 === 0) {
      pingPongArray.push ("PING!");
    } else {
      pingPongArray.push (i);
    };
  };
};

// User Interface Logic
$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();

    var numberRange = $("input#numberInput").val();
    var result = pingPong(numberRange);

    for (var i = 0; i < numberRange; i++) {
      $("ul#result").append("<li>" + pingPongArray[i] + "</li>")
    }; 
  });
}); 