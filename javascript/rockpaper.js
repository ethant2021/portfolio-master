$("").ready(function(){ 

    let choice = 0;
    let compChoice = 0;

    $(".rock").click(function(){

        choice = 1;
        compChoice = Math.floor(Math.random() * 3) + 1;
        RPSwinCheck();
    });

    $(".paper").click(function(){

        choice = 2;
        compChoice = Math.floor(Math.random() * 3) + 1;
        RPSwinCheck();
    });
    $(".scissors").click(function(){
        console.log("test");
        choice = 3;
        compChoice = Math.floor(Math.random() * 3) + 1;
        RPSwinCheck();
    });




function RPSwinCheck(){
    console.log(choice);
    console.log(compChoice);
    $(".gameManager").text("you tied go again");
    
    if(compChoice === choice)
    {
        $(".gameManager").text("you tied go again");
    }
    else if(choice === 1 && compChoice === 2)
    {
        $(".gameManager").text("you lost");
    }
    else if(choice === 1 && compChoice === 3)
    {
        $(".gameManager").text("you won");
    }
    else if(choice === 2 && compChoice === 1)
    {
        $(".gameManager").text("you won");
    }
    else if(choice === 2 && compChoice === 3)
    {
        $(".gameManager").text("you lost");
    }
    else if(choice === 3 && compChoice === 1)
    {
        $(".gameManager").text("you lost");
    }
    else if(choice === 3 && compChoice === 2)
    {
        $(".gameManager").text("you won");
    }

}


});