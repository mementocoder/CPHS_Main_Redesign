const top_menu = document.querySelector('#top-menu-nav');
const function_nav = document.querySelector('#function-nav');

let function_nav_pos = function_nav.getBoundingClientRect().bottom;

function header() {
    function_nav_pos = function_nav.getBoundingClientRect().bottom;
    
    if (window.innerWidth >= 1045) {
        if (function_nav_pos <= 0) {
            top_menu.style.position = 'fixed'
            top_menu.style.left = '0'
            top_menu.style.top = '0'
            top_menu.style.height = '90px'
        } else {
            top_menu.style.position = 'relative'
            top_menu.style.height = '60%'
        }
    }
    else {
        if (function_nav_pos <= 0) {
            top_menu.style.position = 'fixed'
            top_menu.style.left = '0'
            top_menu.style.top = '0'
            top_menu.style.height = 'auto'
        } else {
            top_menu.style.position = 'relative'
            top_menu.style.height = 'auto'
        }
    }
}

document.addEventListener('scroll', function () {
    header();
});

header()