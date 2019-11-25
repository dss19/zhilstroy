"use strict";

$(document).ready(function() {

  // Меню
   
  let menu = $('.header-menu');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 750) {
      menu.addClass('header-menu_scr');
      $('.header-menu-btn').removeClass('header-menu-btn_close');          
      $('.header-menu-nav').removeClass('header-menu-nav_vis');
      $('.cover').removeClass('cover_vis');
      $('.header-menu-btn').addClass('header-menu-btn_scr');      
      $('.header-menu-text').addClass('header-menu-text_scr');      
    } else {
      menu.removeClass('header-menu_scr');
      $('.header-menu-btn').removeClass('header-menu-btn_scr');
      $('.header-menu-text').removeClass('header-menu-text_scr');
    }
  });
  
  $('.header-menu').click(function() {        
    $('.header-menu-btn').toggleClass('header-menu-btn_close');    
    $('.header-menu-text').toggleClass('header-menu-text_vis');    
    $('.header-menu-nav').toggleClass('header-menu-nav_vis');
    if ($('.header-menu-btn_scr').hasClass('header-menu-btn_close'))  {
      $('.cover').toggleClass('cover_vis');
    } else {
      $('.cover').removeClass('cover_vis');
    }   
  });
});
