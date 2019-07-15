let hue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  hue = 0;
}

function draw() {
  //background(220);
  if (hue > 360) {
        hue = 0;
    } else {
        hue++;
    }
	
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 80, 80);
}