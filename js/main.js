$(function(){

  $('.reviews__slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

 });

  $('.header__btn-menu').on('click', function(){
    $('.header__nav ul').slideToggle();
  });

});
