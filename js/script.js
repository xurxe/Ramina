const slideshow = document.querySelector(".slideshow");
let images = slideshow.querySelectorAll("img");

setInterval(moveUp, 15);

for (i = 0; i < images.length; i++) {
    images[i].style.bottom = '0px';
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

