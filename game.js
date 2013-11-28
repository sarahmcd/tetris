function gameLoop(){
	setStorage();
	newBlock();
	animLoop();
}

function setStorage(){
	numCols = 24;
	for (i = 0; i < numCols; i++){
		lowRow[i] = 0;
	}
}

function newBlock(){
	xPos = 72;
	yPos = 0;
	// randomly select a block type for current piece
	currId = 1;
//	currId = blockIds[Math.floor(Math.random() * blockIds.length)];
	currPos = 1;
	canMove = true;
	initBlock();
}


function animLoop(){
	canvas = document.getElementById('simple');
	ctx = canvas.getContext('2d');
	img = new Image();
	img.src = 'assets/sprites.png';
	img.onload = function(){
		setInterval(animate, 50);
		window.addEventListener('keydown', userKey, true);
	}
}

function userKey(event){
//	if (canMove == true){
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
			if (yPos + 24 < (480 - currSourceLen)) {yPos += 25;}
			break;
		// up arrow
		case 38:
			changePos();
			break;
		}
//	}
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
			for (var i = 0; i < blocks.length; i++){
				ctx.drawImage(img, blocks[i].xSource, blocks[i].ySource, blocks[i].wid, blocks[i].len, blocks[i].xPos, blocks[i].yPos, blocks[i].wid, blocks[i].len);
			}
			ctx.drawImage(img, currSourceX, currSourceY, currSourceWid, currSourceLen, xPos, yPos, currSourceWid, currSourceLen);
		};
		img.src = 'assets/sprites.png';
	}
	else {
		alert('Sorry, canvas is not supported in your current browser.');
	}
}

function move(){
	if (nextClear() == true)
		yPos += 5;
	else {
//		canMove = false
		stick();
		newBlock();
	}
}

function nextClear(){
	if (yPos + 5 < (480 - currSourceLen)){
		// block below?
		return true;
	}
	else
		return false;
}

function stick(){
	var block = new Object();
	var row;
	var col;
	
	block.xPos = xPos;
	block.yPos = yPos;
	block.xSource = currSourceX;
	block.ySource = currSourceY;
	block.wid = currSourceWid;
	block.len = currSourceLen;
	blocks.push(block);
}