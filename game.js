var xPos;
var yPos;

function gameLoop(){
	console.log("1");
	setUp();
	animLoop();
}

function setUp(){
	console.log("2");
	xPos = 0;
	yPos = 0;
}

function animLoop(){
	console.log("3");
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	img = new Image();
	img.src = 'sprites.png';
	img.onload = function(){]
		setInterval(animate, 140);
//		window.addEventListener('keydown', userKey, true);
	}
}

function animate(){
	console.log("4");
//	ctx.clearRect(0, 0, 240, 480);
	draw();
//	move();
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
	xPos += 5;
}