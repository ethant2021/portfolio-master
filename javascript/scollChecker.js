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
      $el.css({'left': '25%'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      $el.css({'left': '33%'}); 
    } 
  });

  $(window).scroll(function(e){ 
    var $el = $('.contactBroke'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > smallerHeight && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '-20px'}); 
      $el.css({'right': '25%'}); 
    }
    if ($(this).scrollTop() < smallerHeight && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '35%'}); 
      $el.css({'right': '33%'}); 
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


    
