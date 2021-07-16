$(document).ready(function(){
    $(".weatherButt").click(function(){
      $.getJSON("https://goweather.herokuapp.com/weather/Columbus", function(result){
        
        alert(parseInt(result.temperature) * 9 / 5 + 32 + "°F" + " and it is " + result.description)



      });
    });
  });
