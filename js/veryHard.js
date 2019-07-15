function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
      fill(color(
      random(200, 255),
      random(255),
      random(200, 255)
      ));
      noStroke();
    
    ellipse(mouseX, mouseY, 80, 80);
  }

  //javascript begins
        var x = prompt("Choose a number");
        var op = prompt("Choose an operator (e.g +, -, *, /)");
        var y = prompt("Choose another number");

        //add function
        function addition(x, y) {
            return (1* x) + (1*y);
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

        if (op == '+' && isNaN(x) === false && isNaN(y) === false){
            var a = addition(x, y);
            document.write(x + " + " + y + " = " + a);
        } else if (op == '-' && isNaN(x) === false && isNaN(y) === false) {
            var a = subtract(x, y);
            document.write(x + " - " + y + " = " + a);
        } else if (op == '*' && isNaN(x) === false && isNaN(y) === false) {
            var a = multiply(x, y);
            document.write(x + " * " + y + " = " + a);
        } else if (op == '/' && isNaN(x) === false && isNaN(y) === false) {
            var a = divide(x, y);
            document.write(x + " / " + y + " = " + a);
        } else {
            document.write("Try Again, And This Time Use A Number");
        }
