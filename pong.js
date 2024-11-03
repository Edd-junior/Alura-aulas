let xBola = 300;
let yBola = 200;
let diametro = 30;
let raio = diametro / 2;

let velocidadeX = 8;
let velocidadeY = 8;

let raqueteX = 5;
let raqueteY = 150;
let largura = 10;
let altura = 125;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bola();
  //movimentoDaBola();
  colisão();
  raquete();
  movimentoDaRaquete();
}

function bola() {
  circle (xBola, yBola, diametro);
}

function movimentoDaBola() {
  xBola += velocidadeX;
  yBola += velocidadeY;
}

function colisão() {
  if(xBola + raio > width || xBola - raio < 0){
    velocidadeX *= -1;
}
  
  if(yBola + raio > height || yBola - raio < 0){
    velocidadeY *= -1;
  }
}

function raquete() {
  rect(raqueteX, raqueteY, largura, altura);
}

function movimentoRaquete() {
  if(keyIsDown(UP_ARROW)){
    raqueteY -= 10;
  }
    if(keyIsDown(DOWN_ARROW)){
    raqueteY += 10;
}
