
$(document).ready(function() {
  $("#pingPongForm").submit(function(event) {
   event.preventDefault();

   var numberInput = parseInt($("#numberInput").val());
   var start = 1;
// debugger;
   var list = [];
   var finalArray = [];

      for (var i = 1; i <= numberInput ; i += 1) {

        if ((i % 15)===0) {
          $("#result").append("<li> Ping Pong! </li>");
        }
        else if ((i % 5)===0) {
          $("#result").append("<li> Pong! </li>");
        }
        else if ((i % 3)===0) {
          $("#result").append("<li> Ping! </li>");
        }
        else {
          $("#result").append("<li>"+i+"</li>");
        }
  //   if ( (isNaN(numberInput) || (numberInput < 0)){
  //   alert("THIS INPUT ONLY ACCEPTS NUMBER VALUES GREATER THAN 0");
  // }
   }
  });
});
