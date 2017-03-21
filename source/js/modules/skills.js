

var skills = function () {
    var skillItems = $('.skills__circle .skills__circle-above');
    skillItems.each(function (i, skill) {
        var $skill = $(skill),
            dasharray = $skill.data('stroke-dasharray');

        skill.setAttribute('stroke-dasharray', dasharray);

    })
};

window.onscroll = function () {
    var winScroll = window.pageYOffset;
    if (winScroll > innerHeight / 3) {
        skills();
    }
};