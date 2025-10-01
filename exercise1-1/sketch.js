let circleX;
let circleY;
let circleWidth;

function setup() {
    createCanvas(400, 400);
    background(0);
    noStroke();
    fill(255, 0, 150);
}

function draw() {
    circleX = random(401);
    circleY = random(401);
    circleWidth = random (10, 100);
    if (mouseIsPressed) {
        circle(circleX, circleY, circleWidth);
    }
    if (keyIsPressed) {
        background(0);
    }
}