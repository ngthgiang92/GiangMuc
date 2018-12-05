$(document).ready(function(){
    $('button.navbarToggle').on('click', function(){
        $('header .main-menu').addClass('open');
        $('header .overLay').addClass('fixed');
    })
    $('header .overLay').on('click', function(){
        $('header .main-menu').removeClass('open');
        $('header .overLay').removeClass('fixed');
    })
    // toggle review product detail
    $('.content-review-product').hide();
    $('.toggle-info-product').on('click', function(){
        $('.content-info-product').slideToggle();
    })
    $('.toggle-review-product').on('click', function(){
    $('.content-review-product').slideToggle();
    })

    $('.main-show').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.thumbnail'
      });
      $('.thumbnail').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-show',
        dots: true,
        arrows: false,
        focusOnSelect: true
      });
      $('.related-product').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
          ]
      })
      
})