var r = 255;
var g = 15;
var b=128;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
 
}


function draw(){
    background("purple");
    if (mouseX>100){
background("red");
    }
    if(mouseX<1000 && mouseY>200){
        background("green");
    }
    if(mouseY>300){
        background("blue");
    }
    
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}