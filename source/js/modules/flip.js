
var flip = (function () {
    var flipContainer = document.querySelector('.flip-container'),
        flipLink = document.querySelector('.authorization__link');

    if (!(document.querySelector('.flip-container'))){
        return false;
    }

    return {
        init: function () {
            flipLink.addEventListener('click' ,function () {
                flipContainer.classList.add('flip-container_back');
                flipLink.classList.add('authorization__link_back');
            });

            document.querySelector('#home-link').addEventListener('click', function (e) {
                e.preventDefault();
                flipContainer.classList.remove('flip-container_back');
                flipLink.classList.remove('authorization__link_back');
            });
        }
    }
})();