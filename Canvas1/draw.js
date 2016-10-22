// alert("this is a frog");

var c = document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
ctx.fillRect(100,100,100,100);
ctx.strokeRect(80,80,140,140);
ctx.clearRect(120,120,60,60);

var c2=document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');
ctx2.fillRect(100,100,100,100);