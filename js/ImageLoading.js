var carPic = document.createElement("img");
var trackPics = [];
// var roadPic = document.createElement("img");
// var wallPic = document.createElement("img");
// var finishPic = document.createElement("img");

var picsToLoad = 0; // set automatically via imageList in loadImages()

function countLoadedImagesAndLaunchIfReady(){
    picsToLoad -= 1;
    // console.log(picsToLoad);
    if ( picsToLoad == 0 ){
        imagesLoaded();
    }
}

function beginLoadingImage(imgVar, filename){
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/" + filename;
}

function loadImageForTrackCode( trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages(){
    var imageList = [
        {varName: carPic, theFile: "benzo.png"},
        
        {trackType: TRACK_ROAD, theFile: "road.png"},
        {trackType: TRACK_WALL, theFile: "grasswall.png"},
        {trackType: TRACK_FINISH, theFile: "finish_line.png"}
    ];

    picsToLoad = imageList.length;

    for(var i = 0; i < imageList.length;  i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName, imageList[i].theFile)
        } else {
            loadImageForTrackCode( imageList[i].trackType, imageList[i].theFile);
        }
    }
}