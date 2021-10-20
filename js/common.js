
$(document).ready(function() {

    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        autoplay:false,
        smartSpeed:1000,
        autoplayTimeout:2000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $(".section_header").animated("fadeInDown", "fadeOutUp");
    $(".left .techno_item").animated("fadeInLeft", "fadeOutDown");
    $(".right .techno_item").animated("fadeInRight", "fadeOutDown");
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");

    $("#portfolio_grid").mixItUp();

    $(".s_portfolio li").click(function() {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup").magnificPopup({type:"image"});
    $(".popup_content").magnificPopup({
        type:"inline",
        midClick: true
    });
    $(".portfolio_item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });
    $("input, select, textarea").jqBootstrapValidation();


});
$(window).scroll(function() {

    if($(this).scrollTop() != 0) {
        $('.toTop').fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});

$('.toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);

});













