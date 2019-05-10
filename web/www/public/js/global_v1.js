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
    }
};