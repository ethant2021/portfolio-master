$("").ready(function(){ 

    $("#projects").hide();
    $(".contact").hide();
    $(".about").hide();
    $(".certs").hide();
    let projclicked = 0; 
    let conclicked = 0; 
    let aboutClicked = 0; 
    let aboutTabClicked = 0; 

    $(".projTitle").click(function(){
    
    if(projclicked % 2 == 0){
        $("#projects").show(350);
        $(".contact").hide(350);
        $(".about").hide(350);
        $(".certs").hide(350);

      }
      else
      {
        $("#projects").hide(350);
      }
      projclicked++;
    });

    $(".contactTitle").click(function(){
    
        if(conclicked % 2 == 0){
            $(".contact").show(350);
            $("#projects").hide(350);
            $(".about").hide(350);
            $(".certs").hide(350);
          }
          else
          {
            $(".contact").hide(350);
          }
          conclicked++;
        });

        $(".container").click(function(){
    
            if(aboutClicked % 2 == 0){
                $(".about").show(350);
                $(".contact").hide(350);
                $("#projects").hide(350);
                $(".certs").hide(350);
              }
              else
              {
                $(".about").hide(350);
              }
              aboutClicked++;
            });
    

            $(".aboutBroke").click(function(){
    
              if(aboutTabClicked % 2 == 0){
                $(".about").show(350);
                $(".contact").hide(350);
                $("#projects").hide(350);
                $(".certs").hide(350);
                }
                else
                {
                  $(".about").hide(350);
                }
                aboutTabClicked++;
              });
      
              $(".certBroke").click(function(){
    
                if(aboutTabClicked % 2 == 0){
                    $(".certs").show(350);
                    $("#projects").hide(350);
                    $(".about").hide(350);
                    $(".contact").hide(350);
                  }
                  else
                  {
                    $(".certs").hide(350);
                  }
                  aboutTabClicked++;
                });
        





});