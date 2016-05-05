$(document).ready(function() {
    var turn=true;

    $(".game-space").on("click",function() {
        var isEmpty = $(this).is(":empty");

        // console.log("game space was clicked and isEmpty is: ", isEmpty);

        if (isEmpty) {
            if(turn === true) {
                $(this).html("<h1>X</h1>");
            } else {
                $(this).html("<h1>O</h1>");
            }

            turn = !turn;
        }
    });

});

//this code was written by CodeWald Inc.
