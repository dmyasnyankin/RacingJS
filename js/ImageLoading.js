var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 0; // set automatically via imageList in loadImages()

function countLoadedImagesAndLaunchIfReady(){
    picsToLoad -= 1;
    console.log(picsToLoad);
    if ( picsToLoad == 0 ){
        imagesLoaded();
    }
}

function beginLoadingImage(imgVar, filename){
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/" + filename;
}

function loadImages(){
    var imageList = [
        {varName: carPic, theFile: "benzo.png"},
        {varName: roadPic, theFile: "road.png"},
        {varName: wallPic, theFile: "grasswall.png"}
    ];

    picsToLoad = imageList.length;

    for(var i = 0; i < imageList.length;  i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile)
    }
}