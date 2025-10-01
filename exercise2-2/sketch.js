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
    if (mouseX > 24) {
        sX = mouseX
    } else {
        sX = 24
    }
    if (mouseX > width - 24) {
        sX = width - 24
    }
    if (mouseY > 24) {
        sY = mouseY
    } else {
        sY = 24
    }
    if (mouseY > height - 24) {
        sY = height - 24
    }
}