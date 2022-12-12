jQuery('#top-ten-slider').slick({
    slidesToScroll : 1,
    slidesToShow : 1,
    arrows : false,
    fade : true,
    asNavFor : '#top-ten-slider-nav',
    responsive : [
        {
            breakpoint : 995,
            settings : {
                asNavFor : false,
                arrows : true ,
                nextArrow : '<button class="NextArrow"><i class="fa fa-angle-right"></i></button>',
                prevArrow : '<button class="PrevArrow"><i class="fa fa-angle-left"></i></button>',
            }
        }
    ]
});
jQuery('#top-ten-slider-nav').slick({
    slidesToShow : 3,
    slidesToScroll : 1,
    asNavFor : '#top-ten-slider',
    dots: false,
    arrows : true,
    infinite : true,
    vertical : true,
    verticalSwiping : true,
    centerMode :false,
    nextArrow : '<button class="NextArrow"><i class="fa fa-angle-down"></i></button>',
    prevArrow : '<button class="PrevArrow"><i class="fa fa-angle-up"></i></button>',
    focusOnSelect : true,
    responsive : [
        {
            breakpoint : 1200,
            settings : {
                slidesToShow : 2,
            }
        },
        {
            breakpoint : 600,
            settings : {
                asNavFor : false,
            }
        },
    ]
});