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


$(function () {
    var interval = 3000;
    $('#mainimg').each(function () {
        var container = $(this);
        function switchImg() {
            var imgs = container.find('img');
            var first = imgs.eq(0);
            var second = imgs.eq(1);
            first.appendTo(container).fadeOut();
            second.fadeIn();
        };

        setInterval(switchImg, interval)
    });
});
