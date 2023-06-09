const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImages(imgNumber) {
    const image = new Image();
    const bodyImage = body.querySelector("img")
    if (bodyImage !== null) {
        bodyImage.remove()
    }
    image.src = `picture/night${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImages(randomNumber);

}
init();
setInterval(init, 10000);