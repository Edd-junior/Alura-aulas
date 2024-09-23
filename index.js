function setup() {
  createCanvas(500, 500);
  background(100);
}

function draw() {  
  stroke("black");
  fill("white");

  if(mouseIsPressed){
    rect(mouseX, mouseY,10,20)
 }
}
