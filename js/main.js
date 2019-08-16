// stiki header 
$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 200) $(".header-content").removeClass('fixed-header');
    else $(".header-content").addClass('fixed-header');
});

$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({ scrollTop: top }, 1500);

    });

});


// burger-menu 
document.getElementById("trigger").onclick = function() { open() };

function open() {
    document.getElementById("menu").classList.toggle("show");
}

// сarousel
$('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
});


$('.post-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

  $(document).ready(function(){ 
    $('#container').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
      itemSelector: '.item',
// указываем класс элемента являющегося блоком в нашей сетке
          singleMode: false,
// true - если у вас все блоки одинаковой ширины
      isResizable: true,
// перестраивает блоки при изменении размеров окна
      isAnimated: true,
// анимируем перестроение блоков
          animationOptions: { 
          queue: false, 
          duration: 500 
      }
// опции анимации - очередь и продолжительность анимации
    }); 
  });
