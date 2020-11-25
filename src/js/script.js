$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
        })
    });