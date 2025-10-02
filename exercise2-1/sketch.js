let r;
let g;
let b;
let r1;
let g1;
let b1;



function setup () {
    createCanvas(600, 600);
    noStroke();
}

function draw() {
    background(r1, g1, b1);
    fill (r, g, b);
    circle(300, 300, 400);
    if (mouseIsPressed) {
        r = 150;
        g = 0;
        b = 200;
        r1 = 0;
        g1 = 255;
        b1 = 0;
    } else {
        r = 0;
        g = 255;
        b = 0;
        r1 = 150;
        g1 = 0;
        b1 = 200;
    }

}