const slideshow = document.querySelector(".slideshow");
let images = slideshow.querySelectorAll("img");

setInterval(moveUp, 15);

for (i = 0; i < images.length; i++) {
    images[i].style.bottom = '0px';
    images[i].style.left = '0px';
}

function moveUp() {
    for (i = 0; i < images.length; i++) {
        images[i].style.bottom = parseInt(images[i].style.bottom) + 1 + 'px';
        console.log(images.length);

        if (parseInt(images[i].style.bottom) > 2900) {
            images[i].style.bottom = '-550px';
        }
    }
}

/* const slideshow = document.querySelector(".slideshow");
let images = slideshow.querySelectorAll("img");
let screenSize = window.matchMedia("(max-width: 700px)");

for (i = 0; i < images.length; i++) {
    images[i].style.bottom = '0px';
    images[i].style.left = '0px';
}



function decideDirection(screenSize) {
    if (screenSize.matches) {
        setInterval(moveRight, 15);
    }

    else {
        setInterval(moveUp, 15);
    }
}

function moveUp() {
    for (i = 0; i < images.length; i++) {
        images[i].style.bottom = parseInt(images[i].style.bottom) + 1 + 'px';

        if (parseInt(images[i].style.bottom) > 2900) {
            images[i].style.bottom = '-550px';
        }
    }
}

function moveRight() {
    for (i = 0; i < images.length; i++) {
        images[i].style.left = parseInt(images[i].style.left) + 1 + 'px';

        if (parseInt(images[i].style.left) > 2900) {
            images[i].style.left = '-550px';
        }
    }
}

decideDirection(screenSize);
screenSize.addListener(decideDirection);

 */