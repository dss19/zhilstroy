// Прелоадер 

setTimeout(function() {
  $('.preloader').addClass('done');
}, 3000);

// Воспроизведение видео на Iphone

var video = $('video').get(0);
enableInlineVideo(video);

$(document).ready(function () { 

  // Меню

  var fixMenu = $('#about').offset().top;
  
  $(document).on('scroll load', function() {
    if ($(this).scrollTop() >= fixMenu) {
      $('.menu-btn').removeClass('menu-btn_close');
      $('.menu-nav').removeClass('menu-nav_visible');
      $('.menu-button, .menu-click, .menu-text, .menu-btn, .menu-nav, .menu-link').addClass('fixed');      
    } else {
      $('.menu-button, .menu-click, .menu-text, .menu-btn, .menu-nav, .menu-link').removeClass('fixed');
      $('.menu-text').removeClass('menu-text_hide');
    }
  });  

  $('.menu-click').click(function () {
    $('.menu-btn').toggleClass('menu-btn_close');
    $('.menu-text').toggleClass('menu-text_hide');
    $('.menu-nav').toggleClass('menu-nav_visible');    
  });

  $('.menu-link').click(function() {
    $('.menu-nav').removeClass('menu-nav_visible');
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
    var pos = +$(this).scrollTop(),
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
    var label;
    $('.input').focusin(function () {
      label = $(this).children('.input__label');
      label.addClass('focused-label');
    });
    $('.input').focusout(function () {
      var input = $(this).find('.input__field');
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
  $('.menu-link, .footer-link, .scroll-link, .about-item__link').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href'),
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

  // Табы в Индустрии
  $('.industry-desc-text__subtitle').click(function (e) {
    e.preventDefault();
    $('.industry-desc-text__subtitle').removeClass('active-text');
    $(this).addClass('active-text');
    var href = $(this).attr('href');
    $('.industry-img').removeClass('active-img').removeClass('in-img');
    $(href).addClass('active-img');
    setTimeout(function () {
      $(href).addClass('in-img');
    }, 200);
  });

  $('.industry-desc-text__arrow').click(function() {    
    var firstImg = $('.industry-img').eq(0);
    var currImg = $('.industry-img.active-img');    
    var currImgIndex = $('.industry-img.active-img').index();    
    var nextImgIndex = currImgIndex + 1;    
    var nextImg = $('.industry-img').eq(nextImgIndex);    
    currImg.removeClass('in-img').removeClass('active-img');           
    if (nextImgIndex == ($('.industry-img:last').index() + 1)) {      
      firstImg.addClass('active-img');      
      setTimeout(function () {
        $('.industry-img.active-img').addClass('in-img');
      }, 200);
    } else {      
      nextImg.addClass('active-img');      
      setTimeout(function () {
        $('.industry-img.active-img').addClass('in-img');
      }, 200);
    }    
  });

  
  $('.industry-desc-text__arrow').click(function() {    
    var firstText = $('#text1');
    var secondText = $('#text2');
    var lastText = $('#text3');   
    if (firstText.hasClass('active-text')) {
      firstText.removeClass('active-text');
      secondText.addClass('active-text');
    } else if (secondText.hasClass('active-text')) {
      secondText.removeClass('active-text');
      lastText.addClass('active-text');
    } else {
      lastText.removeClass('active-text');
      firstText.addClass('active-text');
    }     
  });

  // Открытие табов по кнопкам навигации 

  $('.scroll-link').click(function() {
    var trg = $(this).attr('data-click');
    $('.' + trg).trigger('click');
    
  });
  
  // Табы в футере

    

  $('body').on('click', '.footer-tabs-link', function (e) {
    e.preventDefault();
    $('.footer-tabs-link').removeClass('active-link');
    $(this).addClass('active-link');
    var href = $(this).attr('href');
    $('.footer-block-inner').removeClass('active-block').removeClass('in');
    $(href).addClass('active-block');
    setTimeout(function () {
      $(href).addClass('in');
    }, 200);
  });
  
  // Отправка форм
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
        console.log('быстро?');                
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: new FormData(form),          
          success: function() {            
            console.log('отправил');
            $('form').trigger('reset');
            $.fancybox.close();
            $.fancybox.open({
              src: '#thanks-modal',
              smallBtn: false,
              infobar: false,
              toolbar: false              
            });                
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

  ymaps.ready(function() {    
    var myMap = new ymaps.Map('map', {
      center: [53.187312460901715,45.04434658332824],
      zoom: 15
      }),
      myPlacemark = new ymaps.Placemark([53.187312460901715,45.04434658332824], null, {
        iconLayout: 'default#image',
        iconImageHref: './img/1.svg'
      });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');  
    $('.footer-tabs-link').click(function() {
      myMap.geoObjects.remove(myPlacemark);
      var X = $(this).attr('data-ya-x');
      var Y = $(this).attr('data-ya-y');    
      var icon = $(this).attr('data-icon');
      myMap.setCenter([X,Y]);
      myPlacemark = new ymaps.Placemark([X,Y], null, {
        iconLayout: 'default#image',
        iconImageHref: icon
      });
      myMap.geoObjects.add(myPlacemark);      
    });

        
  });

  // ymaps.ready(function() {       
  //   var myMap = new ymaps.Map('map', {
  //     center: [53.21850370548725,45.02088618455506],
  //     zoom: 12,     
  //     }),
  //     myPlacemark = new ymaps.Placemark([53.18727057303403,45.044539702377314], {
  //       id: 'mark1'
  //     }, {
  //       iconLayout: 'default#image',
  //       iconImageHref: './img/1.svg',
  //       iconImageSize: [48, 60],
  //       // visible: false
  //     }),      
  //     myPlacemark2 = new ymaps.Placemark([53.23882157321547,45.00140511904898], {
  //       id: 'mark2'
  //     }, {
  //       iconLayout: 'default#image',
  //       iconImageHref: './img/2.svg',
  //       iconImageSize: [48, 60],
  //       // visible: false
  //     }),      
  //     myPlacemark3 = new ymaps.Placemark([53.238837664471404,45.0010081521148], {
  //       id: 'mark3'
  //     }, {
  //       iconLayout: 'default#image',
  //       iconImageHref: './img/3.svg',
  //       iconImageSize: [48, 60],
  //       // visible: false
  //     }),      
  //     myPlacemark4 = new ymaps.Placemark([53.22138853668967,44.928875686508185], {
  //       id: 'mark4'
  //     }, {
  //       iconLayout: 'default#image',
  //       iconImageHref: './img/4.svg',
  //       iconImageSize: [48, 60],
  //       // visible: false
  //     });           
  //   myMap.geoObjects.add(myPlacemark)
  //                   .add(myPlacemark2)
  //                   .add(myPlacemark3)
  //                   .add(myPlacemark4);                    
  //   myMap.behaviors.disable('scrollZoom');
    
    
  // });  
});