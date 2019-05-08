var canvas, canvasContext;

var porsche = new carClass();
var benzo = new carClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    colorRect(0, 0, canvas.width, canvas.height, "black");
    colorText("WE ARE LOADING THE IMAGES...", canvas.width/2, canvas.height/2, "black");

    loadImages();
}

function imagesLoaded(){

	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
	porsche.reset(benzoPic);
	benzo.reset(porschePic);
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	porsche.move();
	benzo.move();
}

function drawAll() {
	drawTracks();
    porsche.draw();
    benzo.draw();
}