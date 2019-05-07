var carPic = document.createElement("img");
var carPicLoaded = false;

var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

function carImageLoad(){
    carPic.onload = function(){
        carPicLoaded = true;
    }
    // carPic.src = "ferrari.png";
    carPic.src = "benzo.png";
}

function trackLoadImages(){
    roadPic.src = "road.png";
    wallPic.src = "grasswall.png";
}

function loadImages(){
    carImageLoad();
    trackLoadImages();
}