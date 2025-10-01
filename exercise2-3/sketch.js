let x = 50;
let y = 50;
let moveAmountX = 3;
let moveAmountY = 3;

function setup () {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  circle(x, y, 100);
  if (x < 50 || x > width - 50) {
    moveAmountX *= -1;
  }
  x += moveAmountX;
  if (y < 50 || y > height - 50) {
    moveAmountY *= -1
  }
  y += moveAmountY;
}
