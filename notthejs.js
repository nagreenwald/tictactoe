$(document).ready(function() {
  var turn=true;




    $(".game-space").on("click",function() {
      if(turn===true){
        $(this).html("<h1>X</h1>");

      } else {
        $(this).html("<h1>O</h1>");
      }



turn=!turn

      });







});



// && $(this).is(".empty")
// } else {
//   alert("This space is already in play");



//
// if($(".game-space").is(":empty")){
