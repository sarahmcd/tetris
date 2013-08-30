var xPos;
var yPos;
var xLen;
var currId;

function gameLoop(){
	console.log("1");
	setUp();
	animLoop();
}

function setUp(){
	console.log("2");
	xPos = 0;
	yPos = 0;
	xLen = 72;
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
		if (xPos > 0){xPos += -24;}
		break;
	// right arrow
	case 39:
		if (xPos < (240 - xLen)) {xPos += 24;}
		break;
	// down arrow
//	case 40:
	// up arrow
	case 38:
		changePos();
		break;
	}
}

function changePos(){
	if (currId == 1) {reposA();}
	if (currId == 2) {reposB();}
	if (currId == 3) {reposC();}
	if (currId == 4) {reposD();}
	if (currId == 5) {reposE();}
	if (currId == 6) {reposF();}
	if (currId == 7) {reposG();}
}

function reposA(){
	if (currPos == 1){
		currPos = 2;
	}
	else if (currPos == 2){
		currPos = 3;
	}
	else if (currPos == 3){
		currPos = 4;
	}
	else {
		currPos = 1;
	}
}

function animate(){
	console.log("4");
	ctx.clearRect(0, 0, 240, 480);
	draw();
	move();
}

function draw(){
	console.log("5");
	canvas = document.getElementById('simple');
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
		img = new Image();
		img.onload = function(){
			ctx.drawImage(img, 12, 12, 72, 48, xPos, yPos, 72, 48);
		};
		img.src = 'sprites.png';
	}
	else {
		alert('Sorry, canvas is not supported in your current browser.');
	}
}

function move(){
	console.log("6");
	if (yPos < 431)
		yPos += 5;
}