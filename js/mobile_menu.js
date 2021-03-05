$(function () {
    if (window.innerWidth < 1045) {
        let a = document.querySelectorAll('.menuEl > a');
        for (var i = 0; i < a.length; i++) {
            a[i].removeAttribute('href');
        }

        var trigger = $('#trigger');
        var menu = $('#menu-text');
        $(trigger).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle();
        })
    
        var subMenu = $('.menuEl');
        $(subMenu).on('click', function (e) {
            $(e.target.children[1]).slideToggle();
        })
    }
});