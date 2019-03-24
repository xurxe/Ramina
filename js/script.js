const slideshow = document.querySelector(".slideshow");
let images = slideshow.querySelectorAll("img");

function changeDirection(portWidth) {
    if (portWidth.matches) {
        for (i = 0; i < images.length; i++) {
            slideshow.removeChild(images[i]);
            slideshow.appendChild(images[i]);
            images[i].style.left = '0px';
        };

        setInterval(moveRight, 25);
    }

    else {
        for (i = 0; i < images.length; i++) {
            slideshow.removeChild(images[i]);
            slideshow.appendChild(images[i]);
            images[i].style.bottom = '0px';
        };

        setInterval(moveUp, 25);
    }
}

function moveUp() {

    for (i = 0; i < images.length; i++) {
        images[i].style.bottom = parseInt(images[i].style.bottom) + 1 + 'px';

        if (parseInt(images[i].style.bottom) > 2500) {
            images[i].style.bottom = '-500px';
        }
    }
}

function moveRight() {

    for (i = 0; i < images.length; i++) {
        images[i].style.left = parseInt(images[i].style.left) + 1 + 'px';

        if (parseInt(images[i].style.left) > 2500) {
            images[i].style.left = '-500px';
        }
    }
}

var portWidth = window.matchMedia("(max-width: 900px)");
changeDirection(portWidth);
portWidth.addEventListener('resize', changeDirection);