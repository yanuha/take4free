$(function() {
        function t() {
            var t = e.scrollTop(),
                s = 1.1 * e.height();
            $(".revealOnScroll:not(.animated)").each(function() {
                var e = $(this),
                    a = e.offset().top;
                t + s > a && (e.data("timeout") ? window.setTimeout(function() {
                    e.addClass("animated " + e.data("animation"))
                }, parseInt(e.data("timeout"), 10)) : e.addClass("animated " + e.data("animation")))
            })
        }
        $(".js-select-custom").each(function() {
                $(this).siblings(".js-select-custom-style").text($(this).children("option:selected").text())
            }),
            $(".js-select-custom").change(function() {
                $(this).siblings(".js-select-custom-style").text($(this).children("option:selected").text())
            });
        var e = $(window),
            s = (1.1 * e.height(),
                Modernizr.touch);
        s && $(".revealOnScroll").addClass("animated"),
            e.on("scroll", t),
            t()
    }

);

$(function() {
    $(".js-list-btn-toggle li").click(function() {
        $('.js-list-btn-toggle').find('li').removeClass('active');
        $(this).addClass('active');
        if ($('.list-inline-btn').hasClass('active')) {
          $('.gallery').addClass('gallery-inline');
        }
        else {
          $('.gallery').removeClass('gallery-inline');
        }
        return false;
    });
});
