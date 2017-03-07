jQuery(function($) {

    jQuery(window).bind('scroll', function() {
        if (jQuery(window).scrollTop() > 200) {
            jQuery('#header').addClass('header-fixed-top');
        } else {
            jQuery('#header').removeClass('header-fixed-top');
        }
    });

    $(document).ready(function() {
        $('#slider .row').bxSlider({
            controls: false,
            auto: true,
            autoStart: true,
            mode: 'fade',
        });

        $('.user-profile .row').bxSlider({
            minSlides: 1,
            maxSlides: 8,
            moveSlides: 1,
            slideMargin: 90,
            auto: true,
            autoStart: true,
            slideWidth: 165,
        });
        var randomColor = [];


        for (var i = 0; i < 20; i++) {
            randomColor.push(Math.floor(Math.random() * 16777215).toString(16));
            $('.main-video-category .list-video:nth-child(' + (i + 1) + 'n) .main').css('background-color', '#' + randomColor[i]);
            $('.main-video-category .list-video:nth-child(' + (i + 1) + 'n) .main .bg-color').css('background-color', '#' + randomColor[i]);
            $('#channels > .container > .row > div:nth-child(' + (i + 1) + 'n) .main').css('background-color', '#' + randomColor[i]);
            $('.list-categori-video:nth-child(' + (i + 1) + 'n) .thumb').css('background-color', '#' + randomColor[i]);
        }



    });
    $(document).ready(function() {
        var slider_width = $('.pollSlider').width(); //get width automaticly
        $(window).resize(function() {
            slider_width = $('.pollSlider').width(); //get width automaticly
        });
        $('#pollSlider-button').click(function() {
            if ($(this).css("margin-right") == slider_width + "px" && !$(this).is(':animated')) {
                $('.pollSlider,#pollSlider-button').animate({
                    "margin-right": '-=' + slider_width
                });
            } else {
                if (!$(this).is(':animated')) //perevent double click to double margin
                {
                    $('.pollSlider,#pollSlider-button').animate({
                        "margin-right": '+=' + slider_width
                    });
                }
            }


        });
    });

    if (window.screen.width > 767) {
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });
    } else {
        $('ul.nav li.dropdown').click(function() {
            $(this).find('.dropdown-menu').toggle();
        });
    }



    (function() {
        var iframes = document.getElementsByTagName('iframe');

        for (var i = 0; i < iframes.length; ++i) {
            var iframe = iframes[i];
            var players = /www.youtube.com|player.vimeo.com/;
            if (iframe.src.search(players) !== -1) {
                var videoRatio = (iframe.height / iframe.width) * 100;

                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.width = '100%';
                iframe.height = '100%';

                var div = document.createElement('div');
                div.className = 'video-wrap';
                div.style.width = '100%';
                div.style.position = 'relative';
                div.style.paddingTop = videoRatio + '%';

                var parentNode = iframe.parentNode;
                parentNode.insertBefore(div, iframe);
                div.appendChild(iframe);
            }
        }
    })();

    jQuery(document).ready(function() {
        var scrollbar = $('.scrollbar-inner').length;
        var tabsVideo = $('#tabs-video').length;

        if (scrollbar > 0) {
            jQuery('.scrollbar-inner').scrollbar();
        }
        if (tabsVideo > 0) {
            $( "#tabs-video" ).tabs();
        }
        // js custum window
        var heightBox = $('.iframe-box').height();        

        $('.list-video .scrollbar-inner').css("height", heightBox+"px");
        

        if ($(window).width() > 991) {
            var heightBox2 = $('.heightBoxhtml2').height();
            var heightBox3 = $('.main-content').height() + heightBox2;
            var heightBox5 = $('.view-page').height() - $('.box-list-video').height();
            var heightBox6 = $('#content').height() + heightBox2;

            $('.heightBoxhtml').css("margin-top", "-"+heightBox2+"px");
            $('.heightBoxhtml .scrollbar-inner').css("height", heightBox3+"px");
            $('.channels-2-colum .scrollbar-inner').css("height", heightBox5 + "px");
            $('.single-page .channels-2-colum .scrollbar-inner').css("height", heightBox6 + "px");

            // push sidebar
            $(".view-page").after($(".right-sidebar"));
        } else {
            var heightBox4 = $(window).height();
            $('.heightBoxhtml .scrollbar-inner').css("height", heightBox4+"px");

            // push sidebar
            $(".view-page").before($(".right-sidebar"));
        }

        $(window).resize(function() {
            var heightBox = $('.iframe-box').height();

            $('.list-video .scrollbar-inner').css("height", heightBox);

            if ($(window).width() > 991) {
                var heightBox2 = $('.heightBoxhtml2').height();
                var heightBox3 = $('.main-content').height() + heightBox2;
                var heightBox5 = $('.view-page').height() - $('.box-list-video').height();
                var heightBox6 = $('#content').height() + heightBox2;

                $('.heightBoxhtml').css("margin-top", "-"+heightBox2+"px");
                $('.heightBoxhtml .scrollbar-inner').css("height", heightBox3+"px");
                $('.channels-2-colum .scrollbar-inner').css("height", heightBox5 + "px");
                $('.single-page .channels-2-colum .scrollbar-inner').css("height", heightBox6 + "px");
                // push sidebar
                $(".view-page").after($(".right-sidebar"));
            } else {
                var heightBox4 = $(window).height();
                $('.heightBoxhtml .scrollbar-inner').css("height", heightBox4+"px");
                // push sidebar
                $(".view-page").before($(".right-sidebar"));
            }
        });
        // End js custum window

        
    });

});
