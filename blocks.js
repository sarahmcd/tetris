var blockIds = [1, 2, 3, 4, 5, 6, 7];
var blocks = new Array();
var red = new Array();
var lowRow = new Array();
var numCols;
var xPos;
var yPos;
var currSourceX;
var currSourceY;
var currSourceWid;
var currSourceLen;
var currId;
var currPos;
var canMove;

function initBlock(){
//	initRed();
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

function initRed(){
	pos1 = new Object();
	pos2 = new Object();
	pos3 = new Object();
	pos4 = new Object();

	pos1.sourceX = 12;
	pos1.sourceY = 12;
	pos1.sourceWid = 72;
	pos1.sourceLen = 48;
	
	pos2.sourceX = 12;
	pos2.sourceY = 84;
	pos2.sourceWid = 48;
	pos2.sourceLen = 72;

	pos3.sourceX = 12;
	pos3.sourceY = 180;
	pos3.sourceWid = 72;
	pos3.sourceLen = 48;
	
	pos4.sourceX = 36;
	pos4.sourceY = 252;
	pos4.sourceWid = 48;
	pos4.sourceLen = 72;

	red.push(pos1);
	red.push(pos2);
	red.push(pos3);
	red.push(pos4);
	console.log(red);
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
		currPos = 1;
		initBlock();
	}
}

function reposYellow(){
	if (currPos == 1){
		currSourceX = 108;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 2;
	}
	else if (currPos == 2){
		currSourceX = 108;
		currSourceY = 180;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 3;
	}
	else if (currPos == 3){
		currSourceX = 132;
		currSourceY = 252;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 4;
	}
	else {
		initBlock();
		currPos = 1;
	}
}

function reposGreen(){
	if (currPos == 1){
		currSourceX = 204;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 2;
	}
	else if (currPos == 2){
		currSourceX = 204;
		currSourceY = 180;
		currSourceWid = 72;
		currSourceLen = 48;
		currPos = 3;
	}
	else if (currPos == 3){
		currSourceX = 228;
		currSourceY = 252;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 4;
	}
	else {
		initBlock();
		currPos = 1;
	}
}

function reposAqua(){
	if (currPos == 1){
		currSourceX = 324;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 2;
	}
	else {
		initBlock();
		currPos = 1;
	}
}

function reposBlue(){
	if (currPos == 1){
		currSourceX = 444;
		currSourceY = 84;
		currSourceWid = 24;
		currSourceLen = 96;
		currPos = 2;
	}
	else {
		initBlock();
		currPos = 1;
	}
}

function reposMagenta(){
		if (currPos == 1){
		currSourceX = 612;
		currSourceY = 84;
		currSourceWid = 48;
		currSourceLen = 72;
		currPos = 2;
	}
	else {
		initBlock();
		currPos = 1;
	}
}