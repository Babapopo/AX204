console.log("Working");

//Creating new image
var frog = new Image();
frog.src = "wah.png";
//Putting picture on Canvas 
frog.onload = function() {
	ctx5.drawImage(frog, 500, 100, 400, 300);
}
//Creating new image
var hub = new Image();
hub.src = "hulk.png";
//Putting picture on Canvas 
hub.onload = function() {
	ctx5.drawImage(hub, 200, 200, 200, 200);
}
//Creating new image
var lah = new Image();
lah.src = "car.png";
//Putting picture on Canvas 
lah.onload = function() {
	ctx5.drawImage(lah, 50, 300, 100, 50);
}






var c = document.getElementById('MyCanvas1');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "aqua"
ctx.fill();

var c2 = document.getElementById('MyCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.strokeStyle = "aqua";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "red";
ctx2.fill();

var c3 = document.getElementById('MyCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.arc(100,100,80,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "tomato";
ctx3.fill();


var c4 = document.getElementById('MyCanvas4');
var ctx4 = c4.getContext('2d');
ctx4.beginPath();
ctx4.strokeStyle = "aqua";
ctx4.moveTo(0,0);
ctx4.lineTo(220,300);
ctx4.lineTo(350,0);
ctx4.lineTo(60,300);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "red";
ctx4.fill();

var c5 = document.getElementById('scene');
var ctx5 = c5.getContext('2d');
// Sky and Land
ctx5.fillStyle = "green";
ctx5.fillRect(0, 350, 800, 150);
ctx5.fillStyle = "cyan";
ctx5.fillRect(0, 0, 800, 350);
// Sun
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "yellow";
ctx5.fill();



//Add text to canvas
ctx5.font = "italic 30pt Calibri";
ctx5.fillStyle = "red";
ctx5.fillText("GODZILLA VS HULK!!!", 300, 50);






// ctx5.beginPath();
// ctx5.strokeStyle = "black";

// ctx5.closePath();
// ctx5.stroke();
// ctx5.fillStyle = "yellow";
// ctx5.fill();























































































