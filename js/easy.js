function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    fill(0);
    stroke(255);
    ellipse(mouseX, mouseY, 80, 80);
}

function names(a, b) {

    var along = a.length;
    var blong = b.length;


    if (along > blong) {
        return "The name " + a + " is longer than " + b + " by "+ (along - blong) + " character(s)";
    } else if (along < blong){
        return "The name " + b + " is longer than " + a + " by "+ (blong - along) + " character(s)";
    } else {
        return "The name " + a + " and " + b + " are the same length ";
    }
}

console.log("pass two names to the names() function to see which is longer")
