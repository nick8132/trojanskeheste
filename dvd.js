var x = 0;
var y = 0;
var vx = 1;
var vy = 1;
var w = 230;
var h = 115;
W = window.innerWidth;
H = window.innerHeight;

ImageArray = new Array();
ImageArray[0] = 'dvdlogo-00.png';
ImageArray[1] = 'dvdlogo-01.png';
ImageArray[2] = 'dvdlogo-02.png';
ImageArray[3] = 'dvdlogo-03.png';
ImageArray[4] = 'dvdlogo-04.png';
logogen();


function logogen() {
    var num = Math.floor(Math.random() * 5);
    logo = 'logos/' + ImageArray[num];
    console.log(logo);
}

function animate() {

    reqAnimFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

    reqAnimFrame(animate);

    for (var i = 0; i < 1; i++) { // change if you want it to go faster
        x += vx;
        y += vy;
        if (x + w == W) {  
            vx = -vx;
            logogen();
        }
        if (y + h == H) {
            vy = -vy;
            logogen();
        }
        if (x == 0) {
            vx = -vx;
            logogen();
        }
        if (y == 0) {
            vy = -vy;
            logogen();
        }
    }

    draw();

}
var canvas = document.getElementById("c");
var context = canvas.getContext("2d");

function draw() {
    var canvas = document.getElementById("c");
    var context = canvas.getContext("2d");

    var img = new Image();
    img.onload = function() {

        context.clearRect(0, 0, W, H);
        context.drawImage(img, x, y, w, h);

    }
    img.src = logo;
}

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.width = window.innerWidth;
    context.height = window.innerHeight;
}

var ctx = document.getElementById("c").getContext("2d");
ctx.canvas.width = W;
ctx.canvas.height = H;
setInterval(draw, 10);

animate();