// Scroll function
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 30 ){
            $('.fixed-top').addClass('navbar-scroll-view');
        } else {
            $('.fixed-top').removeClass('navbar-scroll-view');
        }
    });
});
/* ================== */

// SEARCH POPUP
$(function(){
    $('#open_search_popup').on('click', function(e){
        e.preventDefault();
        $('body').addClass('modal-open');
        $('#search').addClass('visible');
    });
    $('.link-close').on('click', function(e){
        e.preventDefault();
        $('body').removeClass('modal-open');
        $('#search').removeClass('visible');
    });
});
/* scrollTop function */
$(function () {
    var headerHeight = $('.main-menu').height();
    $('.hero-banner .down-bottom a[href^="\\#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({'scrollTop': $target.offset().top - headerHeight}, 2000);
        //$('.clm-landing-header .navbar-nav li').removeClass('active');
        //$(this).parent('li').addClass('active');
    });
});