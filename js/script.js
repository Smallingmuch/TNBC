
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayhoverpause:true,
        autoplaytimeout:100,
        items:4,
        nav: true,
        navText:["&laquo;", "&raquo;"],
        loop:true,
        lazyLoad:true,
        margin:20,
        padding:5,
        stagePadding:5,
        animateOut:'fadeOut',
        responsive:{
            0:{
                items:1,
                dots:false
            },
            485: {
                items:1,
                dots:false
            },
            728:{
                items:2,
                dots:false
            },
            960:{
                items:3,
                dots:false
            },
            1200:{
                items:3,
                dots:false
            }
        }
    });
