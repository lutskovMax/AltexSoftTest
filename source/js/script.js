$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
      {
        items: 1,

          dots: true,
         navText: ["<img src='img/prev.png' >", "<img src='img/next.png'>"],
          nav: true,
          autoplay: true,
          smartSpeed: 900,
          rewind: true,
          autoplayHoverPause:true,
            loop: true,
          responsiveClass: true,



      }

  );


//$('select').niceSelect();

    $('.header__burger').click(function (){
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock');
    });






});
