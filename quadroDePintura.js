function setup() {
  createCanvas(500, 500);
  background(100);
}

function draw() {  
  lapis();
}
function lapis(){
  stroke("black");
  fill("white");

  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}