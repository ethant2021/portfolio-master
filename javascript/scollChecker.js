let box = document.querySelector('body');
let height = box.offsetHeight;
let smallerHeight = height * .35;
let heightRems = smallerHeight * .0625;
console.log(smallerHeight);

      


$(window).scroll(function(e){ 
    var $el = $('.projectBroke'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '-20px'}); 
      $el.css({'left': '20%'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      $el.css({'left': '30%'}); 
    } 
  });

  $(window).scroll(function(e){ 
    var $el = $('.contactBroke'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '-20px'}); 
      $el.css({'right': '20%'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      $el.css({'right': '30%'}); 
    } 
  });
  
  $(window).scroll(function(e){ 
    var $el = $('.ethan'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '110px'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 

    } 
  });



  $(window).scroll(function(e){ 
    var $el = $('.aboutBroke'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '-20px'}); 
      $el.css({'left': '10%'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      $el.css({'left': '15%'}); 
    } 
  });




  $(window).scroll(function(e){ 
    var $el = $('.certBroke'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '-20px'}); 
      $el.css({'right': '10%'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      $el.css({'right': '15%'}); 
    } 
  });


    
