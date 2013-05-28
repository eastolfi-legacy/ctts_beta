function menuFixedOnScroll(selector, scrollHeight, callback) {
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > scrollHeight) {
            $('#menu_container').addClass('menu_fixed');
            $('#menu_container').addClass('navbar-fixed-top');
            $('#menu_container').addClass('span9');
            $('#menu_container').removeClass('menu_not_fixed');
        } else {
            $('#menu_container').addClass('menu_not_fixed');
            $('#menu_container').removeClass('menu_fixed');
            $('#menu_container').removeClass('span9');
            $('#menu_container').removeClass('navbar-fixed-top');
        }
        if (callback && typeof(callback) === "function") callback();
    });
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}