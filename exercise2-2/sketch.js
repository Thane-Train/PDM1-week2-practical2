let sX;
let sY;

function setup () {
    createCanvas(400, 400);
}

function draw() {
    background(100);
    fill(0);
    rectMode(CENTER);
    stroke(255);
    square(sX, sY, 50)
    if (mouseX > 25) {
        sX = mouseX
    } else {
        sX = 25
    }
    if (mouseX > width - 25) {
        sX = width - 25
    }
    if (mouseY > 25) {
        sY = mouseY
    } else {
        sY = 25
    }
    if (mouseY > height - 25) {
        sY = height - 25
    }
}