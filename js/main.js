// якорь
$("a.scroll-to").on("click", function(e){
   e.preventDefault();
   var anchor = $(this).attr('href');
   $('html, body').stop().animate({
       scrollTop: $(anchor).offset().top - 100
   }, 800);
});

// swiper js
const swiper = new Swiper('.image-slider', {
   direction: 'horizontal',
   loop: true,
 
   pagination: {
     el: '.swiper-pagination',
     type: 'progressbar'
   },
 
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   touchRatio: 1,

   autoHeight: true,
 });

//  функция скролла вверх при обновлении страницы
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

// бургер
$(document).ready(function() {
   $('.menu-burger__header').click(function(){
       $('.menu-burger__header').toggleClass('open-menu');
       $('.nav').toggleClass('open-menu');
   });
});

// скрипт увелечения картинки
$(function(){
   $('.minimized').click(function(event) {
     var i_path = $(this).attr('src');
     $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
     $('#magnify').css({
      left: ($(window).width() - $('#magnify').outerWidth())/2,
      top: ($(window).height() - $('#magnify').outerHeight())/2
    });
     $('#overlay, #magnify').fadeIn('fast');
   });
   
   $('body').on('click', '#close-popup, #overlay', function(event) {
     event.preventDefault();
     $('#overlay, #magnify').fadeOut('fast', function() {
       $('#close-popup, #magnify, #overlay').remove();
     });
   });
 });