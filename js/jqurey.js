
$(document).ready(function(){
var v=true;
  $('.sidebarbtn').click(function(){


if(v==true){
    on();
    v=false;
  }
else{
off();
v=true;
}
    $('.sidebar').toggleClass('active');
    $('.sidebarbtn').toggleClass('toggle');
   $('.main').toggleClass('mainactive')
   $('.footer').toggleClass('footeractive')
   $('.header').toggleClass('headeractive')
   $('.fadeout').toggleClass('fadeoutactive')
  })
  $('#sidebartext').click(function(){
    $('.sidebar').toggleClass('active');
    $('.sidebarbtn').toggleClass('toggle');
   $('.main').toggleClass('mainactive')
   $('.footer').toggleClass('footeractive')
   $('.header').toggleClass('headeractive')
   $('.fadeout').toggleClass('fadeoutactive')
   if(v==true){
       on();
       v=false;
     }
   else{
   off();
   v=true;
   }
  })

  $('#start').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "3");
    $('.video').css("z-index", "1");
  })
  $('#chassi').click(function() {
    $('.chassi').css("z-index", "3");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
    $('.video').css("z-index", "1");

  })
  $('#mobo').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "3");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
    $('.video').css("z-index", "1");
  })
  $('#cpu').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "3");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
    $('.video').css("z-index", "1");
  })
  $('#gpu').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "3");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
    $('.video').css("z-index", "1");
  })
  $('#ram').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "3");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
    $('.video').css("z-index", "1");
  })
  $('#video').click(function() {
     $('.chassi').css("z-index", "1");
     $('.cpu').css("z-index", "1");
     $('.gpu').css("z-index", "1");
     $('.mobo').css("z-index", "1");
     $('.ram').css("z-index", "1");
     $('.utrymme').css("z-index", "1");
     $('.main').css("z-index", "1");
     $('.video').css("z-index", "3");
   });
})


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
