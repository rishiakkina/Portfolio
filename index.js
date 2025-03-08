const image = document.getElementsByClassName("img");
let images = {
    0 : "./Assets/welcome-welcome-home.gif",
    1 : "./Assets/giphy.gif"
}

let choice = Math.floor(Math.random()*2);

if(image.length > 0){
    image[0].src = images[choice];
}