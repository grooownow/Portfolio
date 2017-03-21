//hamburger-menu

$(document).ready(function(){
    $('.menu__btn').click(function(){
        $(this).toggleClass('open');
        $('.nav_pages').toggleClass('open');
    });
});

//flip
if (!!(document.querySelector('.flip-container'))) {
    flip.init();
    console.log('flip');
};

//scroll-page
var scrollLinkDown = document.querySelector('.arrow_down');
var scrollLinkUp = document.querySelector('.arrow_up');

if (scrollLinkDown !== null) {
    scrollLinkDown.addEventListener('click', function (e) {
        e.preventDefault();

        ScrollPage.down(this);
    })
}
if (scrollLinkUp !== null) {
    scrollLinkUp.addEventListener('click', function (e) {
        e.preventDefault();

        ScrollPage.up(this);
    })
}
//slider
$(function () {
    slider.init()
});

//blur

var blurForm = document.querySelector('.blur');
if (blurForm !== null) {
    blur.set();
    window.onresize = function () {
        blur.set();
    };
}

