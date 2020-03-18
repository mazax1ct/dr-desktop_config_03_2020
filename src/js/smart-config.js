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
  //переключаем видимость основной секции
  $('.nc__inner-top').removeClass('is-active');
  $('.nc__inner-top--result').addClass('is-active');

  $('.nc__tabs').addClass('is-disabled');
  $('.nc__list-block').addClass('is-disabled');

  //переключаем кнопки в футере
  $('.footer__inner').removeClass('is-active');
  $('.footer__inner--result').addClass('is-active');

  return false;
});

//возврат из "итоговой конфигурации" к конфигу
$(".js-config-edit").click(function () {
  //переключаем видимость основной секции на начало конфига
  $('.nc__inner-top').removeClass('is-active');
  $('.nc__inner-top:first').addClass('is-active');

  $('.nc__tabs').removeClass('is-disabled');
  $('.nc__list-block').removeClass('is-disabled');

  //переключаем кнопки в футере
  $('.footer__inner').removeClass('is-active');
  $('.footer__inner--main').addClass('is-active');

  return false;
});

//обработка кнопок для анимации графиков
$('html').keydown(function(e) { //отлавливаем нажатие клавиш
  if (e.keyCode == 107 || e.keyCode == 61) { //если нажали +
    $("#dplus").addClass("plus").animate({ //сначала добавляем класс для цвета увеличения затем анимируем до нового значения ширины
      width: "64%"
    }, 450, function() {
      setTimeout(function() { //небольшой таймаут между завершением анимации дельты и основной полоски
        $("#plus").animate({ //анимируем основную полоску
          width: "64%"
        }, 450 , function() {
          $("#dplus").animate({ //по завершению анимации основной полоски дотягиваем до нее дельту
            width: "64%"
          }, 450 , function() { //по завершению анимации дельты убираем класс для цвета
            $("#dplus").removeClass("plus");
          });
        });
      }, 450);
    });
  }

  if (e.keyCode == 109 || e.keyCode == 173) { //если нажали -
    $("#dplus").addClass("minus"); //сначала добавляем класс для цвета уменьшения
    $("#plus").animate({ //анимируем основную полоску до нового значения ширины
      width: "51%"
    }, 450, function() {
      setTimeout(function() { //небольшой таймаут между завершением анимации основной полоски и дельты
        $("#dplus").animate({ //анимируем основную дельту
          width: "51%"
        }, 450 , function() {
          $("#dplus").removeClass("minus"); //по завершению анимации дельты убираем класс для цвета
        });
      }, 450);
    });
  }
});
