//alert("Ribbit");

//Declare variables at the top relevationof scope

var canvas;
var ctx;
var x = 600;
var y = 300;
//Hold magnitude of our movement
var mx = 2;
var my = 4;
//Hold width and height of canvas
var width = 600;
var height = 300;

//Initialize our animation
function init() {
canvas = document.getElementById("myCanvas");
ctx =  canvas.getContext("2d");
return setInterval(draw,10);
}

//drawCircle
function circle (x, y, r) {
ctx.beginPath();
ctx.arc(x,y,r, 0, Math.PI*2);
ctx.fillStyle = "green";
ctx.fill();
}

//Clears me cannvas
function clear() {
ctx.clearRect(0,0, width, height);
}

//finally wes done
function draw() {
clear();
circle(x, y, 29);

//Stays inside Canvas
if (x + mx > width || x + mx < 0) {
mx = -mx;
}

if (y + my > height || y + my < 0) {
my = -my;
}
//moving us canvas
x+= mx;
y+= my; 
}

init();










