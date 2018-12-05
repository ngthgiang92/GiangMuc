$(document).ready(function(){
    $('.sliderIntro').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1
    });
    $('.sliderBrandPage').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(window).scrollTop(0);
    var stickyHeaderTop = ($('#header').offset().top + 20);
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#header').addClass('scrollFixed');
        } else {
            $('#header').removeClass('scrollFixed');
        }
    });
    $('button.navbarToggle').on('click', function(){
        $('header .main-menu').addClass('open');
        $('header .overLay').addClass('fixed');
    })
    $('header .overLay').on('click', function(){
        $('header .main-menu').removeClass('open');
        $('header .overLay').removeClass('fixed');
    })

    //handle submit form booking
    $('#booking-submit').on('click', function(){
        $('.leftFormGroup *').filter('input, textarea').each(function(){
            const self = $(this);
            const val = self.val();
            const error_message = "<p class='error-message'>Vui lòng điền vào trường này.</p>";
            self.next().remove();
            if(val !== ''){
               console.log('value ! null');
            }else{
                console.log('after');
                self.after(error_message);
            }
        });
    });
})