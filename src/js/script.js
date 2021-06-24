//закрытие попапа блока компонентов
function ncClose() {
  $("body").removeClass("overflow");
  $(".nc").removeClass("is-open");
  $(".nc-c").removeClass("is-open");
  $(".js-nc-c-block").removeClass("is-open");
  $(".nc-c__list").stop(true, true).animate({
    opacity: 0
  }, 100, function() {
    $(".nc-c__list").removeClass("is-open");
  });

  //закрытие поповера с информацией
  $(".nci-info").removeClass("is-active");
  $(".nci-button").removeClass("is-active");

  $(".header").removeClass("blur");
  $(".nc__inner-top").removeClass("blur");
  $(".nc__tabs").removeClass("blur");
  $(".footer").removeClass("blur");
}

//закрытие попапа блока компонентов тип 2
function ncClose2() {
  $("body").removeClass("overflow");
  $(".nc-c2").removeClass("is-open");
  $(".js-nc-c2-block").removeClass("is-open");
  $(".nc-c2__list").stop(true, true).animate({
    opacity: 0
  }, 100, function() {
    $(".nc-c2__list").removeClass("is-open");
  });
}

//функция открытия "итого"
function configResultOpen() {
  //переключаем видимость основной секции
  $('.nc__inner-top').removeClass('is-active');
  $('.nc__inner-top--result').addClass('is-active');

  $('.nc__inner-bottom').addClass('is-disabled');

  //переключаем кнопки в футере
  $('.footer__inner').removeClass('is-active');
  $('.footer__inner--result').addClass('is-active');

  //переключение состояний стрелок слайдера
  $(".nc-c-list__arrow--prev").prop("disabled", true);
  $(".nc-c-list__arrow--next").prop("disabled", false);

  //смена фона
  $('.nc__inner').removeClass('nc__inner--accessories').addClass('nc__inner--result');
}

//закрытие попапа блока компонентов при выборе компонента
$('.nc-item').click(function() {
  ncClose();
  ncClose2();
});

$('.nc-item2').click(function() {
  ncClose();
  ncClose2();
});

$('.nc-item3').click(function() {
  ncClose();
  ncClose2();
});

//открытие/закрытие меню личного кабинета
$(".js-personal-opener").click(function() {
  if($(this).hasClass("is-active")) {
    $(this).removeClass("is-active"); //снимаем класс активности с кнопки
    $("body").removeClass("overflow"); //убираем запрет скролла на body
    $(".personal-menu").removeClass("is-open"); //закрываем меню
    $(".footer").removeClass("blur"); //убираем класс размытия
    $(".nc").removeClass("blur");
  } else {
    $(this).addClass("is-active");
    $("body").addClass("overflow");
    $(".personal-menu").addClass("is-open");
    $(".footer").addClass("blur");
    $(".nc").addClass("blur");
  }
  $(".js-menu-opener").removeClass('is-active');  //закрываем главное меню
  $(".main-menu").removeClass("is-open");
  return false;
});

//открытие попапа
if ($("[data-fancybox='popup']").length) {
  $("[data-fancybox='popup']").fancybox({
    touch: false,
    infobar: false,
    toolbar: false,
    smallBtn: false,
    animationEffect: false,
    arrows: false,
    hash: false
  });
}

//закрытие попапа
$('.js-popup-close').on('click', function() {
  $.fancybox.close();
  return false;
});

//открытие списка компонентов
$(".js-nc-c-block").click(function () {
  var el = $(this); //элемент
  $(".nc-c").removeClass("is-open"); //закрываем все подобные блоки
  $(".js-nc-c-block").removeClass("is-open");
  el.addClass("is-open"); //открываем текущий

  $(".nc-c__list").stop(true).animate({ //скрываем список
    opacity: 0
  }, 200, function() {
    $(".nc-c__list").removeClass("is-open"); //удаляем класс после скрытия
    el.next(".nc-c__list").addClass("is-open").stop(true).animate({ //добавляем класс открытия и показываем список
      opacity: 1
    }, 200);
    el.next(".nc-c__list").find('div.nci-holder:visible').addClass('visible'); //ищем видимые элементы списка и вещаем им классы
    $('.nc-c__list-block').each(function( index ) {
      $(this).find('.visible').eq(1).addClass('middle');
      $(this).find('.visible').eq(2).addClass('middle');
      $(this).find('.visible').last().addClass('bottom');
    });
    //$('.nc-c__list-block .visible').last().addClass('bottom');
  });

  el.parent(".nc-c").addClass("is-open"); //вешаем класс открытия на родителя

  if(el.hasClass("is-open")){
    $(".nc").addClass("is-open"); //класс с затененеием
    $("body").addClass("overflow"); //класс с запретом скролла
  } else {
    $(".nc").removeClass("is-open");
    $("body").removeClass("overflow");
  }

  $(".header").addClass("blur");
  $(".nc__inner-top").addClass("blur");
  $(".nc__tabs").addClass("blur");
  $(".footer").addClass("blur");
});

//закрытие списка компонентов
$(".js-nc-c-block-close").click(function () {
  ncClose();
});

//открытие списка компонентов тип 2
$(".js-nc-c2-block").click(function () {
  var el = $(this);
  $(".nc-c2").removeClass("is-open");
  $(".js-nc-c2-block").removeClass("is-open");
  el.addClass("is-open");

  $(".nc-c2__list").stop(true).animate({
    opacity: 0
  }, 200, function() {
    $(".nc-c2__list").removeClass("is-open");
    el.next(".nc-c2__list").addClass("is-open").stop(true).animate({
      opacity: 1
    }, 200);
  });

  el.parent(".nc-c2").addClass("is-open");

  if(el.hasClass("is-open")){
    $(".nc").addClass("is-open");
    $("body").addClass("overflow");
  } else {
    $(".nc").removeClass("is-open");
    $("body").removeClass("overflow");
  }
});

//закрытие списка компонентов тип 2
$(".js-nc-c2-block-close").click(function () {
  ncClose2();
});

//переключение табов конфига
$('.js-config-tab').click(function () {
  //смена классов у табов
  $('.js-config-tab').removeClass('is-active');
  $(this).addClass('is-active');

  //переключение состояния кнопки назад в слайдере компонентов
  if($(this).parent().index() > 0) {
    $(".nc-c-list__arrow--prev").prop("disabled", false);
  } else {
    $(".nc-c-list__arrow--prev").prop("disabled", true);
  }

  //смена классов наборов компонентов
  $('.nc-c-list__item-cell').removeClass('is-active');
  $('.nc-c-list__item-cell[data-tab="'+ $(this).attr('data-tab') +'"]').addClass('is-active');

  //смена классов разделов (конфиг/аксессуары/итого)
  $('.nc__inner-top').removeClass('is-active');
  $('.nc__inner-top[data-section="'+ $(this).attr('data-section') +'"]').addClass('is-active');

  //смена фона
  if($(this).attr('data-section') == 2) {
    $('.nc__inner').removeClass('nc__inner--result').addClass('nc__inner--accessories');
  } else {
    $('.nc__inner').removeClass('nc__inner--accessories');
  }

  return false;
});

//листалка "слайдов" конфига
$(".nc-c-list__arrow").click(function () {
  var parent = $(this).parent();
  var slides = parent.find($('.nc-c-list__item-cell')).length; //кол-во слайдов

  if(slides > 1) { //если есть другие слайды

    if($(this).hasClass("nc-c-list__arrow--next")) { //если движемся вперед

      var slide = $(".nc-c-list__item-cell.is-active").index();

      if ((slide + 1) < slides) {
        //смена набора компонентов
        $(".nc-c-list__item-cell").removeClass("is-active");
        $(".nc-c-list__item-cell").eq(slide + 1).addClass("is-active");

        //смена активности кнопки
        $(".nc-c-list__arrow--prev").prop("disabled", false);

        //смена таба
        $(".nc__tabs-link").removeClass("is-active");
        $(".nc__tabs-item").eq(slide + 1).find(".nc__tabs-link").addClass("is-active");

        //смена классов разделов (конфиг/аксессуары/итого)
        $('.nc__inner-top').removeClass('is-active');
        $('.nc__inner-top[data-section="'+ $(".nc__tabs-item").eq(slide + 1).find(".nc__tabs-link").attr('data-section') +'"]').addClass('is-active');

        //смена фона
        if($(".nc__tabs-item").eq(slide + 1).find(".nc__tabs-link").attr('data-section') == 2) {
          $('.nc__inner').removeClass('nc__inner--result').addClass('nc__inner--accessories');
        } else {
          $('.nc__inner').removeClass('nc__inner--accessories');
        }

        return false;
      }

      if (slide + 2 >= slides) {
        //смена активности кнопки
        $(".nc-c-list__arrow--next").prop("disabled", true);

        //открытие итого
        configResultOpen();

        return false;
      }
    }

    if($(this).hasClass("nc-c-list__arrow--prev")) { //если движемся назад
      var slide = $(".nc-c-list__item-cell.is-active").index();

      if(slide > 0) {
        //смена набора компонентов
        $(".nc-c-list__item-cell").removeClass("is-active");
        $(".nc-c-list__item-cell").eq(slide - 1).addClass("is-active");

        //смена активности кнопки
        $(".nc-c-list__arrow--next").prop("disabled", false);

        //смена таба
        $(".nc__tabs-link").removeClass("is-active");
        $(".nc__tabs-item").eq(slide - 1).find(".nc__tabs-link").addClass("is-active");

        //смена классов разделов (конфиг/аксессуары/итого)
        $('.nc__inner-top').removeClass('is-active');
        $('.nc__inner-top[data-section="'+ $(".nc__tabs-item").eq(slide - 1).find(".nc__tabs-link").attr('data-section') +'"]').addClass('is-active');

        //смена фона
        if($(".nc__tabs-item").eq(slide - 1).find(".nc__tabs-link").attr('data-section') != 2) {
          $('.nc__inner').removeClass('nc__inner--result').removeClass('nc__inner--accessories');
        }

        console.log(slide);

        if(slide == 1) {
          $(".nc-c-list__arrow--prev").prop("disabled", true);
          return false;
        }

        return false;
      }
    }

  } else { //если слайдов нет, то кнопки отключаем на php при формировании шаблона
    console.log("слайдов 1, нужно отключить кнопки");
  }
});

//открытие описания компонена
$(".js-nci-info-opener").click(function () {
  $(".nci-button").removeClass("is-active");
  $(".nci-info").removeClass("is-active");
  $(this).addClass("is-active");
  $(this).next(".nci-info").addClass("is-active");
  return false;
});

//закрытие описания компонена
$(".js-nci-info-closer").click(function () {
  $(this).parent(".nci-info").removeClass("is-active");
  $(this).parent(".nci-info").prev(".nci-button").removeClass("is-active");
  return false;
});

//переключение выводимых параметров производительности
$(".js-performance-type .nc__performance-tabs-link").click(function () {
  $(".js-performance-type .nc__performance-tabs-link").removeClass("is-active");
  $(this).addClass("is-active");
  $(".nc__performance-bars-tab").removeClass("is-active");
  $(".nc__performance-bars-tab[data-target=" + $(this).attr("data-target") + "]").addClass("is-active");
  return false;
});

//переключение на "итоговую конфигурацию" и кнопки в футере
$(".js-config-result").click(function () {
  configResultOpen();
  return false;
});

//возврат из "итоговой конфигурации" к конфигу
$(".js-config-edit").click(function () {
  //переключаем видимость основной секции на начало конфига
  $('.nc__inner-top').removeClass('is-active');
  $('.nc__inner-top:first').addClass('is-active');

  //переключаем табы на начало конфига
  $('.nc__tabs-link').removeClass('is-active');
  $('.nc__tabs-item:first .nc__tabs-link').addClass('is-active');

  //переключаем слайдер компонентов на начало
  $('.nc-c-list__item-cell').removeClass('is-active');
  $('.nc-c-list__item-cell:first').addClass('is-active');

  //возвращаем видимость блоку с табами
  $('.nc__inner-bottom').removeClass('is-disabled');

  //переключаем кнопки в футере
  $('.footer__inner').removeClass('is-active');
  $('.footer__inner--main').addClass('is-active');

  //смена фона
  $('.nc__inner').removeClass('nc__inner--result').removeClass('nc__inner--accessories');

  return false;
});

$(document).ready(function () {
  //слайдер корпусов
  if ($('.js-boxes-slider').length) {
    $('.js-boxes-slider').slick({
      fade: true,
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#design_slider_arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#design_slider_arrow_right"/></svg></button>',
      dots: false,
      asNavFor: $('.js-boxes-vertical-slider')
    });
  }

  //вертикальный слайдер корпусов
  if ($('.js-boxes-vertical-slider').length) {
    $('.js-boxes-vertical-slider').slick({
      vertical: true,
      auto: false,
      mobileFirst: true,
      slidesToShow: 2,
      infinite: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#design_slider_arrow_down"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#design_slider_arrow_up"/></svg></button>',
      dots: false,
      focusOnSelect: true,
      asNavFor: $('.js-boxes-slider'),
      responsive: [
        {
          breakpoint: 1299,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1599,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    });
  }
});

//фонарик
Array.from(
  document.querySelectorAll('.js-fancy-light'),
  function(el) {
    el.addEventListener('mousemove',function(e){
      var rect = el.getBoundingClientRect()
      el.style.setProperty('--px', e.clientX - rect.left);
      el.style.setProperty('--py', e.clientY - rect.top);
    });
  });

//настройки графиков
$(document).on('click', '.options__toggler', function () {
  $(this).toggleClass('is-active');
  $('.options__dropdown').toggle();
  return false;
});
