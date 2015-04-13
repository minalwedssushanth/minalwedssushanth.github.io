$(window).on('load resize', function(){
    var m2height=$(window).height();
    var m1height=$(window).height()/3;
    var m3height=$(window).height();
    var m4height=$(window).height();
    var m5height=$(window).height();
    $('#messageline1').css('margin-top',m1height+"px");
    $('#messageline2').css('margin-top',m2height+"px");
    $('#messageline3').css('margin-top',m3height+"px");
    $('#messageline4').css('margin-top',m4height+"px");
    $('#messageline5').css('margin-top',m5height+"px");
});

$(window).scroll(function(){
    var pageHeight = $(window).height();
    var pageHeight2 = $(window).height() * 2;
    var scrolledFromTop = $(window).scrollTop();
    
    if (scrolledFromTop > pageHeight){
        $('html').addClass('scrolled1');
    }else if (scrolledFromTop > pageHeight2){
        $('html').addClass('scrolled2');
    }else{
        $('html').removeClass('scrolled1');
        $('html').removeClass('scrolled2');
    }
});
