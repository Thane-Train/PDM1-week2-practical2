function setup () {
    createCanvas(400, 400);
}

function draw() {
    let x = constrain(mouseX, 25, 375);
    let y = constrain(mouseY, 25, 375);
    background(100);
    fill(0);
    rectMode(CENTER);
    stroke(255);
    square(x, y, 50)
}