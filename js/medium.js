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
  
  const col = (color(0));
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
    stroke(255);
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
  
  //update function adds velocity to position
  Bubble.prototype.update = function () {
    this.pos.add(this.vel);
  }
              
  return Bubble;
  
})();

var word = prompt("Give me a word!");

        if (word.length === 0) {
            console.log("user didn't type anything");
        } else {
            if (word === word.toUpperCase() && isNaN(word) === true){ //word is all caps
            console.log("the user is SHOUTING");
            } else if (word === word.toLowerCase() && isNaN(word) === true){ //word is all lowercase
                console.log("user is whispering...");
            } else if (word[0] === word[0].toUpperCase() && isNaN(word) === true){ //word is capitalized 
                console.log("user is speaking normally");
            } else if ( isNaN(word) === false){ //user passes a number
                console.log("user typed number");
            }else { //default response                                   
                console.log("user is not speaking normally")
            }
        }