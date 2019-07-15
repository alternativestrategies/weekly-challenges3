let xpos;
let ypos;

function setup() {
 createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
  fill(color(
    random(0, 255),
    random(0, 255),
    random(0, 255)
  ));
  noStroke();
  xpos = random(0, windowWidth);
  ypos = random(0, windowHeight);
 
  const randomSize = random(50, 150);

//javascript begins
if (mouseIsPressed) {
  ellipse(xpos, ypos, randomSize, randomSize);
  }
}

function numDiff(x, y){
    var z = x - y;
    return "The difference between "+ x + " and " + y + " is " + z ;
}
console.log("pass two words to the numDiff() function to find the difference between them");