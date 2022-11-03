let img = new Image();
img.src = "contra.png";
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function setup() {
  createCanvas(400, 400);
  init_again();
}

function draw() {
  background(220);
  
}

function init_again(){
  ctx.drawImage(img,0,0,32,32,0,0,32,32);
}
