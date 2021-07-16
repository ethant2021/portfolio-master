var playerTurn = 0;
$("").ready(function(){ 
 
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var s4 = 0;
    var s5 = 0;
    var s6 = 0;
    var s7 = 0;
    var s8 = 0;
    var s9 = 0;
/*images need to be imgured
scale images*/
$(".TTTbutt").click(function(){

    $(".gameManager").text("it is player 1s turn");
     if(playerTurn % 2 === 1){
         $(".gameManager").text("it is player 1s turn");
     }
     else{
        $(".gameManager").text("it is player 2s turn");/* WHY TF NO WORK*/
     }
     playerTurn++;
     winCheck();

});
$(".RESET").click(function(){

    s1 = 0;
    s2 = 0;
    s3 = 0;
    s4 = 0;
    s5 = 0;
    s6 = 0;
    s7 = 0;
    s8 = 0;
    s9 = 0;

    $(".gameManager").text("game reset");

    $("#s1").text("");
    $("#s2").text("");
    $("#s3").text("");

    $("#s4").text("");
    $("#s5").text("");
    $("#s6").text("");

    $("#s7").text("");
    $("#s8").text("");
    $("#s9").text("");
});

$("#square1").click(function(){
    if(s1 === 1 || s1 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s1 = 1;
            $("#s1").text("x");
        }
        else
        {
            s1 = 2;
            $("#s1").text("o");
        }
    }
    winCheck();
    console.log(s1);
});
$("#square2").click(function(){
    if(s2 === 1 || s2 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s2 = 1;
            $("#s2").text("x");
        }
        else
        {
            s2 = 2;
            $("#s2").text("o");

        }
    }
    winCheck();
    console.log(s2);
});
$("#square3").click(function(){
    if(s3 === 1 || s3 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s3 = 1;
            $("#s3").text("x");
        }
        else
        {
            s3 = 2;
            $("#s3").text("o");
        }
    }
    winCheck();
    console.log(s3);
});
$("#square4").click(function(){
    if(s4 === 1 || s4 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s4 = 1;
            $("#s4").text("x");
        }
        else
        {
            s4 = 2;
            $("#s4").text("o");
        }
    }
    winCheck();
    console.log(s4);
});
$("#square5").click(function(){
    if(s5 === 1 || s5 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s5 = 1;
            $("#s5").text("x");
        }
        else
        {
            s5 = 2;
            $("#s5").text("o");
        }
    }
    console.log(s5);
    winCheck();
});
$("#square6").click(function(){
    if(s6 === 1 || s6 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s6 = 1;
            $("#s6").text("x");
        }
        else
        {
            s6 = 2;
            $("#6").text("o");

        }
    }
    winCheck();
    console.log(s6);
});
$("#square7").click(function(){
    if(s7 === 1 || s7 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s7 = 1;
            $("#s7").text("x");
        }
        else
        {
            s7 = 2;
            $("#s7").text("o");
        }
    }
    console.log(s7);
    winCheck();
});
$("#square8").click(function(){
    if(s8 === 1 || s8 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s8 = 1;
            $("#s8").text("x");        }
        else
        {
            s8 = 2;
            $("#s8").text("o");

        }
    }
    console.log(s8);
    winCheck();
});
$("#square9").click(function(){
    if(s9 === 1 || s9 === 2)
    {
        alert("you cant play here");
    }
    else
    {
        if( playerTurn % 2 === 1)
        {
            s9 = 1;
            $("#s9").text("x");
        }
        else
        {
            s9 = 2;
            $("#s9").text("o");

        }
    }
    console.log(s9);
    winCheck();
});

function winCheck() {
    if(s1 === 1 && s2 === 1 && s3 === 1)
    {
        alert(" p1 wins");
    }
    else if (s4 === 1 && s5 === 1 && s6 === 1)
    {
        alert(" p1 wins");
    }
    else if (s7 === 1 && s8 === 1 && s9 === 1)
    {
        alert(" p1 wins");
    }
    else if (s1 === 1 && s4 === 1 && s7 === 1)
    {
        alert(" p1 wins");
    }
    else if (s2 === 1 && s5 === 1 && s8 === 1)
    {
        alert(" p1 wins");
    }
    else if (s3 === 1 && s6 === 1 && s9 === 1)
    {
        alert(" p1 wins");
    }
    else if (s1 === 1 && s5 === 1 && s9 === 1)
    {
        alert(" p1 wins");
    }
    else if (s3 === 1 && s5 === 1 && s7 === 1)
    {
        alert(" p1 wins");
    }
    else if(s1 === 2 && s2 === 2 && s3 === 2)
    {
        alert(" p2 wins");
    }
    else if (s4 === 2 && s5 === 2 && s6 === 2)
    {
        alert(" p2 wins");
    }
    else if (s7 === 2 && s8 === 2 && s9 === 2)
    {
        alert(" p2 wins");
    }
    else if (s1 === 2 && s4 === 2 && s7 === 2)
    {
        alert(" p2 wins");
    }
    else if (s2 === 2 && s5 === 2 && s8 === 2)
    {
        alert(" p2 wins");
    }
    else if (s3 === 2 && s6 === 2 && s9 === 2)
    {
        alert(" p2 wins");
    }
    else if (s1 === 2 && s5 === 2 && s9 === 2)
    {
        alert(" p2 wins");
    }
    else if (s3 === 2 && s5 === 2 && s7 === 2)
    {
        alert(" p2 wins");
    }
    else if(s1 !== 0 && s2 !== 0 && s3 !== 0 && s4 !== 0 && s5 !== 0 && s6 !== 0 && s7 !== 0 && s8 !== 0 && s9 !== 0)
    alert("draw");
  }


});


