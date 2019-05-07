var canvas, canvasContext;

var benzo = new carClass();
var popoCar = new carClass();

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
	benzo.reset(benzoPic);
	popoCar.reset(popoPic);
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	benzo.move();
	popoCar.move();
}

function drawAll() {
	drawTracks();
    benzo.draw();
    popoCar.draw();
}