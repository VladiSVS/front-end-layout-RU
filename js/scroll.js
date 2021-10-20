$('a[href^="#portfolio"], a[href^="#techno"], a[href^="#contacts"], a[href^="#info"]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top - -5 }, 800);
    }
    return false;
});