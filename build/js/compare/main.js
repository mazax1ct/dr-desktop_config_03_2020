//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  var b = $(".js-banner-height");
  if($(window).scrollTop() > (b.height() / 2)) {
    h.addClass("half-scrolled");
  } else {
    h.removeClass("half-scrolled");
  }

  if($(window).scrollTop() > (b.height())) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

var targetElement = document.querySelector(".header__center");

$(document).ready(function () {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  var btn = $('#go-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('is-active');
    } else {
      btn.removeClass('is-active');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


  //главный баннер
  if ($('.js-slider').length) {
    $('.js-slider').slick({
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true
          }
        }
      ]
    });
  }

  //слайдер новостей
  if ($('.js-news-list').length) {
    if($('body').width() < 991) {
      $('.js-news-list').slick({
        autoplay: false,
        mobileFirst: true,
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
        dots: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    }
  }

  //слайдер программ
  if ($('.js-programs-slider').length) {
    if($('body').width() < 991) {
      $('.js-programs-slider').slick({
        autoplay: false,
        mobileFirst: true,
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
        dots: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    }
  }

  //слайдер инфраструктуры
  if ($('.js-structure-slider').length) {
    if($('body').width() > 767) {
      $(".js-structure-slider").slick({
        infinite: false,
        speed: 300,
        centerMode: true,
        variableWidth: true,
        appendArrows: '.js-structure-slider-arrows',
        prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                variableWidth: false,
                dots: false
              }
            }
          ]
      });

      $('.js-structure-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.js-ssn').removeClass('is-active');
        $('.js-ssn').eq(slick.currentSlide).addClass('is-active');
      });
    }
  }

  //переключение в слайдере инфраструктуры
  $(".js-ssn").click(function(e){
    e.preventDefault();
    slideIndex = $(this).index();
    $('.js-ssn').removeClass('is-active');
    $(this).addClass('is-active');
    if($('body').width() < 768) {
      $('.structure-slider__slide').removeClass('is-active');
      $('.structure-slider__slide[data-index='+ $(this).attr('data-index') +']').addClass('is-active');
    } else {
      $('.js-structure-slider').slick('slickGoTo', slideIndex, false);
    }
  });

  //слайдер галереи
  if ($('.js-gallery-slider').length) {
    $('.js-gallery-slider').slick({
      centerPadding: '50px',
      centerMode: true,
      appendArrows: '.js-gallery-nav',
      autoplay: false,
      mobileFirst: true,
      slidesToShow: 3,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false,
      variableWidth: true
    });
  }

  //слайдер отзывов
  if ($('.js-reviews-list').length) {
    $('.js-reviews-list').slick({
      adaptiveHeight: true,
      autoplay: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
      appendArrows: $('.reviews-buttons'),
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
            appendArrows: $('.js-reviews-list')
          }
        }
      ]
    });
  }

  //слайдер ссылок
  if ($('.js-links-slider').length) {
    $('.js-links-slider').slick({
      adaptiveHeight: true,
      autoplay: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 4,
          }
        }
      ]
    });
  }
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие меню
$(document).on('click', '.js-menu-opener', function () {
  bodyScrollLock.disableBodyScroll(targetElement);
  $('.header__center').addClass('is-open');
  return false;
});

//закрытие меню
$(document).on('click', '.js-menu-closer', function () {
  bodyScrollLock.enableBodyScroll(targetElement);
  $('.header__center').removeClass('is-open');
  return false;
});

//открытие/закрытие проблемы
$('.js-problem').click(function () {
  var el = $(this);

  if($('body').width() < 768){
    if(!el.hasClass('is-open')) {
      $('.js-problem').removeClass('is-open');
      $('.problem__dropdown').slideUp(200, function () {
        setTimeout(function() {
          el.find('.problem__dropdown').slideDown();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.problem__dropdown').slideUp();
      el.removeClass('is-open');
    }
  } else {
    if(!el.hasClass('is-open')) {
      $('.js-problem').removeClass('is-open');
      $('.problem__dropdown').fadeOut(200, function () {
        setTimeout(function() {
          el.find('.problem__dropdown').fadeIn();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.problem__dropdown').fadeOut();
      el.removeClass('is-open');
    }
  }
  //return false;
});

//открытие/закрытие причины
$('.js-reason').click(function () {
  var el = $(this);

  if($('body').width() < 768){
    if(!el.hasClass('is-open')) {
      $('.js-reason').removeClass('is-open');
      $('.reason__dropdown').slideUp(200, function () {
        setTimeout(function() {
          el.find('.reason__dropdown').slideDown();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.reason__dropdown').slideUp();
      el.removeClass('is-open');
    }
  } else {
    if(!el.hasClass('is-open')) {
      $('.js-reason').removeClass('is-open');
      $('.reason__dropdown').fadeOut(200, function () {
        setTimeout(function() {
          el.find('.reason__dropdown').fadeIn();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.reason__dropdown').fadeOut();
      el.removeClass('is-open');
    }
  }
  return false;
});

//аккордеон
$(document).on('click', '.js-accordion-toggler', function () {
  var el = $(this);
  el.parent().find('.accordion__dropdown-block').fadeToggle(300);
  el.parent().find('.accordion__button').toggleClass('open');
  return false;
});

//открытие/закрытие причины
$('.js-feature').click(function () {
  var el = $(this);

  if($('body').width() < 768){
    if(!el.hasClass('is-open')) {
      $('.js-feature').removeClass('is-open');
      $('.feature__dropdown').slideUp(200, function () {
        setTimeout(function() {
          el.find('.feature__dropdown').slideDown();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.feature__dropdown').slideUp();
      el.removeClass('is-open');
    }
  } else {
    if(!el.hasClass('is-open')) {
      $('.js-feature').removeClass('is-open');
      $('.feature__dropdown').fadeOut(200, function () {
        setTimeout(function() {
          el.find('.feature__dropdown').fadeIn();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.feature__dropdown').fadeOut();
      el.removeClass('is-open');
    }
  }
  return false;
});
