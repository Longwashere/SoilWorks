
webCircles = [];

var canvas = document.getElementById('soilWebCanvas');
var ctx = canvas.getContext("2d");


// Center Circle
ctx.beginPath();
ctx.arc(500,500, 100, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.font = "40px garamond";
ctx.fillStyle = "black"
ctx.textAlign = "center";
ctx.fillText("Soil", 500, 510);
ctx.stroke();

// Top Circle
ctx.beginPath();
ctx.arc(500,300, 100, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.font = "40px garamond";
ctx.fillStyle = "black"
ctx.textAlign = "center";
ctx.fillText("Food", 500, 315);
ctx.stroke();

// Bottom Circle
ctx.beginPath();
ctx.arc(500,700, 100, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.font = "30px garamond";
ctx.fillStyle = "black"
ctx.textAlign = "center";
ctx.fillText("Foundations", 500, 715);
ctx.stroke();

// Top Left Cirlce
ctx.beginPath();
ctx.arc(326,400, 100, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.font = "30px garamond";
ctx.fillStyle = "black"
ctx.textAlign = "center";
ctx.fillText("Fiber & Fuel", 326, 415);
ctx.stroke();

// Bottom Left Circle
ctx.beginPath();
ctx.arc(326,600, 100, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.font = "40px garamond";
ctx.fillStyle = "black"
ctx.textAlign = "center";
ctx.fillText("Filter", 326, 615);
ctx.stroke();

// Top Right Circle
ctx.beginPath();
ctx.arc(673,400, 100, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.font = "30px garamond";
ctx.fillStyle = "black"
ctx.textAlign = "center";
ctx.fillText("Farmaceuticals", 673, 415);
ctx.stroke();

// Bottom Left Circle
ctx.beginPath();
ctx.arc(673,600, 100, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.font = "40px garamond";
ctx.fillStyle = "black"
ctx.textAlign = "center";
ctx.fillText("Fun", 673, 615);
ctx.stroke();

//ctx.fillStyle = '#a2c5a5';
//ctx.fill();
//ctx.fillStyle = '#ed6a7c';
//ctx.fill();
