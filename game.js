var xPos;
var yPos;
var currSourceX;
var currSourceY;
var currSourceWid;
var currSourceLen;
var currId;
var currPos;

function gameLoop(){
	setUp();
	animLoop();
}

function setUp(){
	xPos = 72;
	yPos = 0;
	currId = 3;
	currPos = 1;
	initBlock();
}

function initBlock(){
	if (currId == 1){
		currSourceX = 12;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;	
	}
	else if (currId == 2){
		currSourceX = 108;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
	}
	else if (currId == 3){
		currSourceX = 204;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
	}
	else if (currId == 4){
		currSourceX = 300;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
	}
	else if (currId == 5){
		currSourceX = 396;
		currSourceY = 12;
		currSourceWid = 96;
		currSourceLen = 24;
	}
	else if (currId == 6){
		currSourceX = 516;
		currSourceY = 12;
		currSourceWid = 48;
		currSourceLen = 48;
	}
	else {
		currSourceX = 588;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
	}
}

function animLoop(){
	canvas = document.getElementById('simple');
	ctx = canvas.getContext('2d');
	img = new Image();
	img.src = 'sprites.png';
	img.onload = function(){
		setInterval(animate, 140);
		window.addEventListener('keydown', userKey, true);
	}
}

function userKey(event){
	switch(event.keyCode){
	// left arrow
	case 37:
		if (xPos > 0) {xPos += -24;}
		break;
	// right arrow
	case 39:
		if (xPos < (240 - currSourceWid)) {xPos += 24;}
		break;
	// down arrow
	case 40:
		if (yPos < (480 - currSourceLen)) {yPos += 24;}
		break;
	// up arrow
	case 38:
		changePos();
		break;
	}
}

function changePos(){
	if (currId == 1) {reposRed();}
	else if (currId == 2) {reposYellow();}
	else if (currId == 3) {reposGreen();}
	else if (currId == 4) {reposAqua();}
	else if (currId == 5) {reposBlue();}
	else if (currId == 7) {reposMagenta();}
	else {return;}
}

function reposRed(){
	if (currPos == 1){
		currSourceX = 12;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 2;
	}
	else if (currPos == 2){
		currSourceX = 12;
		currSourceY = 180;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 3;
	}
	else if (currPos == 3){
		currSourceX = 36;
		currSourceY = 252;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 4;
	}
	else {
		currSourceX = 12;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 1;
	}
}

function reposYellow(){
	if (currPos == 1){
		currSourceX = 108;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 2;
	}
	else if (currPos == 2){
		currSourceX = 108;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 3;
	}
	else if (currPos == 3){
		currSourceX = 108;
		currSourceY = 180;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 4;
	}
	else {
		currSourceX = 132;
		currSourceY = 252;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 1;
	}
}

function reposGreen(){
	if (currPos == 1){
		currSourceX = 204;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 2;
	}
	else if (currPos == 2){
		currSourceX = 204;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 3;
	}
	else if (currPos == 3){
		currSourceX = 204;
		currSourceY = 180;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 4;
	}
	else {
		currSourceX = 228;
		currSourceY = 252;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 1;
	}
}

function reposAqua(){
	if (currPos == 1){
		currSourceX = 300;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 2;
	}
	else {
		currSourceX = 324;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 1;
	}
}

function reposBlue(){
	if (currPos == 1){
		currSourceX = 396;
		currSourceY = 12;
		currSourceWid = 96;
		currSourceLen = 24;
		currPos = 2;
	}
	else {
		currSourceX = 444;
		currSourceY = 84;
		currSourceWid = 24;
		currSourceLen = 96;
		currPos = 1;
	}
}

function reposMagenta(){
		if (currPos == 1){
		currSourceX = 588;
		currSourceY = 12;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 2;
	}
	else {
		currSourceX = 612;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 1;
	}
}

function animate(){
	ctx.clearRect(0, 0, 240, 480);
	draw();
	move();
}

function draw(){
	canvas = document.getElementById('simple');
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
		img = new Image();
		img.onload = function(){
			ctx.drawImage(img, currSourceX, currSourceY, currSourceWid, currSourceLen, xPos, yPos, currSourceWid, currSourceLen);
		};
		img.src = 'sprites.png';
	}
	else {
		alert('Sorry, canvas is not supported in your current browser.');
	}
}

function move(){
	if (yPos < 431)
		yPos += 5;
}