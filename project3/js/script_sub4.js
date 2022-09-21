$(function () {
    $('.header_btn').each(function () {
        $('.btn1').click(function () {
            if ($('.btn1_con').is(":visible")) { $('.btn1_con').slideUp(); } else { $('.btn1_con').slideDown(); }
        });

        $('.btn2').click(function () {
            if ($('.btn2_con').is(":visible")) { $('.btn2_con').slideUp(); } else { $('.btn2_con').slideDown(); }
        });
    });
});

$(function(){
    $('.sidemenu > li').each(function(){
        var sub = $(this).find('.side_menu');

        $(this).hover(function(){
            sub.stop().slideDown();
        }, function(){
            sub.stop().slideUp();
        });
    });
});