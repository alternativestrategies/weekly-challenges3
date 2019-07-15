//add function
function add(x, y) {
    return x + y;
}

//subtract function
function subtract(x, y) {
    return x - y;
}

//multiply function
function multiply(x, y) {
    return x * y;
}

//divide function
function divide(x, y) {
    return x / y;
}

console.log("pass two numbers to the add(), subtract(), multiply(), or divide() function to find an answer  ")

//ANIMATION BEGINS-------------------------------------------------------
var bubbles = [];
var numBub = 50;

///SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
   for(var i = 0; i < numBub.length; i++){
    bubbles[i] = new Bubble(pos, vel, col, radius);
  }
  
}

function draw() {
  background(0);
  //iife for update and display
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].update();
  }
  
  const pos = createVector(mouseX, mouseY)//creates the pos of the ellipse
  const vel = createVector(random(-4,4),
                           random(-4,4));
  
  const col = (color(
              random(200,255),
              random(0,255), 
              random(0,255)
  ));
  const radius = random(50,150);//creates radius for ellipse between 50, 150
  
  //pushes new bubble object to bubble array
  bubbles.push(
    new Bubble(pos,vel,col,radius)
  );
}


//Bubble function declaration
var Bubble = (function() {
  
  //creating bubble object that takes 
  function Bubble(pos, vel, col, radius){
    this.pos = pos;
    this.vel = vel;
    this.col = col;
    this.radius = radius;
  }
  //show function 
  Bubble.prototype.show = function () {
    noStroke();
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
  
  //update function adds velocity to position
  Bubble.prototype.update = function () {
    this.pos.add(this.vel);
  }
              
  return Bubble;
  
})();