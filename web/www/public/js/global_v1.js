var $$ = {
    initLoginRegister:function () {
        $(document).on('click','.cmt-popup [data-social]',function () {
            popup($(this).attr('data-social'));
        });
        function popup(social) {
            var opts = {
                "width": 700,
                "height": 520,
                "menubar": "no",
                "resizable": "yes",
                "location": "yes",
                "scrollbars": "no",
                "centered": true
            };
            window.open('/auth/' + social, "Connect");
        }
    },
    initSwiper: function () {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
             },
            effect: 'fade',
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
};