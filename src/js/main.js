$(document).ready(function () {

  // Меню

  let menu = $('.header-menu');
  $(window).scroll(function () {       
    if ($(this).scrollTop() > 750) {
      menu.addClass('header-menu_scr');
      $('.header-menu-btn').removeClass('header-menu-btn_close');
      $('.header-menu-nav').removeClass('header-menu-nav_vis');
      $('.cover').removeClass('cover_vis');
      $('.header-menu-btn').addClass('header-menu-btn_scr');
      $('.header-menu-text').addClass('header-menu-text_scr');
      $('.header-menu-nav li').addClass('hovered');
    } else {
      menu.removeClass('header-menu_scr');
      $('.header-menu-btn').removeClass('header-menu-btn_scr');
      $('.header-menu-text').removeClass('header-menu-text_scr');
      $('.header-menu-nav li').removeClass('hovered');
    }
  });

  $('.header-menu').click(function () {
    $('.header-menu-btn').toggleClass('header-menu-btn_close');
    $('.header-menu-text').toggleClass('header-menu-text_vis');
    $('.header-menu-nav').toggleClass('header-menu-nav_vis');
    if ($('.header-menu-btn_scr').hasClass('header-menu-btn_close')) {
      $('.cover').toggleClass('cover_vis');
    } else {
      $('.cover').removeClass('cover_vis');
    }
  });

  // Typed JS (Печатающийся текст)

  var typed = new Typed('.main-text-typed', {
    strings: ["<text style='background:#A90F3D'>строим здания&#160;&#160;</text>", "<text style='background:#009944'>производим бетон и ЖБИ&#160;&#160;</text>", "<text style='background:#2F2482'>обслуживаем дома&#160;&#160;</text>"],
    typeSpeed: 50,
    startDelay: 1000,
    backSpeed: 30,
    loop: true,
    showCursor: false,
  });


  $(document).scroll(function () {
    let pos = +$(this).scrollTop(),
      city = $('.about-old-img__img'),
      union = $('.about-old-element__item'),
      indCity = (pos - 800) / 10,
      indUnion = (pos - 800) / 5;
    // console.log(pos);

    if ($(this).scrollTop() > 800 && $(this).scrollTop() < 1650) {
      city.css({
        'transform': 'translateY(' + -indCity + 'px)'
      });
      union.css({
        'transform': 'translateY(' + -indUnion + 'px)'
      });
    }
  });

  // fancybox
  $('[data-fancybox^="modal"]').fancybox({
    animationEffect: "fade",
    animationDuration: 300,
    gutter: 0,
    touch: false,
    smallBtn: false,
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner modal-inner">' +
      '<div class="fancybox-stage modal-stage">' +
      '</div>' +
      '</div>' +
      '</div>',
  });

  $('[data-fancybox^="quick-view"]').fancybox({
    animationEffect: "fade",
    animationDuration: 300,
    gutter: 0,
    loop: true,
    arrows: true,
    touch: {
      vertical: false
    },
    baseTpl:

      '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg quickview-bg"></div>' +
      '<div class="fancybox-inner quickview-inner">' +
      '<button data-fancybox-close class="fancybox-button quickview-button-close fancybox-button--close close-modal">' +
      '<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="22.6279" y="0.979248" width="2" height="32" transform="rotate(45 22.6279 0.979248)" fill="#C4C4C4"/>' +
      '<rect y="2.39355" width="2" height="32" transform="rotate(-45 0 2.39355)" fill="#C4C4C4"/>' +
      '</svg>' +
      '</button>' +
      '<div class="fancybox-stage quickview-stage">' +
      '<div class="fancybox-navigation quickview-navigation">' +
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left quickview-arrow-left" href="javascript:;">' +
      '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M11.835 1.8701L10.055 0.100098L0.165039 10.0001L10.065 19.9001L11.835 18.1301L3.70504 10.0001L11.835 1.8701Z" fill="black" fill-opacity="0.54"/>' +
      '</svg>' +
      '</button>' +
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right quickview-arrow-right" href="javascript:;">' +
      '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M0.165039 18.13L1.93504 19.9L11.835 9.99998L1.93504 0.0999756L0.165039 1.86998L8.29504 9.99998L0.165039 18.13H0.165039Z" fill="black" fill-opacity="0.54"/>' +
      '</svg>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '<div class="fancybox-form-wrap">' +
      '</div>' +
      '</div>' +
      '</div>',
    onInit: function (instance) {

      /*
  
          #1 Move product form inside right block
          =======================================
  
      */

      // Find current form element ..
      var current = instance.group[instance.currIndex];
      instance.$refs.form = current.opts.$orig.parent().find('.social-product-form');

      // .. and move to the container
      instance.$refs.form.appendTo(instance.$refs.container.find('.fancybox-form-wrap'));

      /*

        #2 Create bullet navigation links
        =================================

      */
      var list = '',
        $bullets;

      for (var i = 0; i < instance.group.length; i++) {
        list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + '</span></a></li>';
      }

      $bullets = $('<ul class="social-product-bullets">' + list + '</ul>').on('click touchstart', 'a', function () {
        var index = $(this).data('index');

        $.fancybox.getInstance(function () {
          this.jumpTo(index);
        });

      });

      instance.$refs.bullets = $bullets.appendTo(instance.$refs.stage);

    },
    beforeShow: function (instance) {

      // Mark current bullet navigation link as active
      instance.$refs.stage.find('ul:first')
        .children()
        .removeClass('active')
        .eq(instance.currIndex)
        .addClass('active');

    },

    afterClose: function (instance, current) {

      // Move form back to the place
      instance.$refs.form.appendTo(current.opts.$orig.parents('.social-product:first').children('.d-none'));

    }
  });

  // Input label scale

  $('.input', function () {
    let label;
    $('.input').focusin(function () {
      label = $(this).children('.input__label');
      label.addClass('focused-label');
    });
    $('.input').focusout(function () {
      let input = $(this).find('.input__field');
      if (input.val() == '') {
        label.removeClass('focused-label');
      }
    });
  });



  // textarea size

  $('.input__textarea').on('keyup input', function () {
    $(this).css('height', 'auto').css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));
  });

  // скролл
  $('.header-menu__link, .footer-link, .scroll-link').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('href'),
      bl_top = $(target).offset().top;
    $('html, body').animate({
      scrollTop: bl_top
    }, 1000);
  });

  // Скролл наверх
  $('.footer-copyrights-btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  // Табы в футере
  $('body').on('click', '.footer-tabs-link', function (e) {
    e.preventDefault();
    $('.footer-tabs-link').removeClass('active-link');
    $(this).addClass('active-link');
    let href = $(this).attr('href');
    $('.footer-block-inner').removeClass('active-block').removeClass('in');
    $(href).addClass('active-block');
    setTimeout(function () {
      $(href).addClass('in');
    }, 200)
  });
  
  $('form').each(function() {    
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        }                
      },
      messages: {
        name: {
          required: 'Это поле нужно заполнить',
          minlength: 'Длина имени должна быть более 2-х символов' 
        },
        phone: {
          required: 'Это поле нужно заполнить'
        }
      },      
      submitHandler: function(form) {        
        $.ajax({
          url: 'send.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: new FormData(form),
          success: function() {
            console.log('отправил');
            $('form').trigger('reset');
                
          }
        });
      }
    });  
  });

  // Маска телефона 
  $('[name="phone"]').mask('+7 (999) 999-99-99');

  // Слайдеры в блоке девелопмент

  $('.development-gallery').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,    
    slidesToScroll: 5,
    infinite: true,
    centerMode: false,
    initialSlide: 0,
    prevArrow: '<div class="social-prev">' +
    '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M11.835 1.8701L10.055 0.100098L0.165039 10.0001L10.065 19.9001L11.835 18.1301L3.70504 10.0001L11.835 1.8701Z" fill="black" fill-opacity="0.54"/>' +
    '</svg>' +
    '</div>',
    nextArrow: '<div class="social-next">' +
    '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M0.165039 18.13L1.93504 19.9L11.835 9.99998L1.93504 0.0999756L0.165039 1.86998L8.29504 9.99998L0.165039 18.13H0.165039Z" fill="black" fill-opacity="0.54"/>' +
    '</svg>' +
    '</div>',
    responsive: [
      {
        breakpoint: 1440,
        settings: {          
          slidesToShow: 4,
          slidesToScroll: 4,
        }          
      },
      {
        breakpoint: 1200,
        settings: {          
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1023,
        settings: {          
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {          
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]    
  });
    

});