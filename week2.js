let x,y,d;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  
  x= 0;
  y= height/2;
  d= 50;
}
function draw() {
  // Set background to black
  background(0);
  
if(x > width){

  x = 0;

}

if (x<width/2){
   fill('white');
}

else{
  fill('blue');
}
 circle(x,y,d);

 x += 25;
}
