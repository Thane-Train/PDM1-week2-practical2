let r = 0;
let g = 255;
let b = 0;



function setup () {
    createCanvas(600, 600);
    noStroke();
}

function draw() {
    background(150, 0, 200);
    fill (r, g, b);
    circle(300, 300, 400);
    if (mouseIsPressed) {
        background(0, 255, 0);
        r = 150;
        g = 0;
        b = 200;
    } else {
        r = 0;
        g = 255;
        b = 0;
    }

}