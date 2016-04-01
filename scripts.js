
$(document).ready(function() {
  $("#pingPongForm").submit(function(event) {
   event.preventDefault();

   var numberInput = parseInt($("#numberInput").val());
   var start = 1;
debugger;
   var list = [];
   var finalArray = [];
    for (var index = start; index <= numberInput; index++) {

      list.push(index);


   }
   for (var x=1; x <= list.length; x++){
       if( x % 3 && x % 5 ) {
           finalArray = list.replace(x, "pingpong");
       } else {
           if( x % 3 == 0 ) {
               finalArray = list.replace(x, "ping");
           }
           if( x % 5 == 0 ) {
               finalArray = list.replace(x, "pong");
           }
       }
       $("#result").text(finalArray);
   }
 });
});
