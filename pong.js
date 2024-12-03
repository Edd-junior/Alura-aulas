//variáveis da bola
let xBola = 300;
let yBola = 200;
let diametro = 30;
let raio = diametro / 2;

//variáveis de velocidade
let velocidadeX = 8;
let velocidadeY = 8;

//variáveis da raquete
let raqueteX = 5;
let raqueteY = 150;
let largura = 10;
let altura = 125;

//variáveis da raquete oponente
let raqueteOponenteX = 581;
let raqueteOponenteY = 125;
let larguraOponente = 10;
let alturaOponente = 125;
let velocidadeOponenteY;

let colidu = false

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bola();
  movimentoDaBola();
  colisão();
  raquete();
  raqueteOponente();
  movimentoRaqueteOponente();
  movimentoRaquete();
  colisãoRaquete();
  colisãoRaqueteOponente();
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

function raqueteOponente() {
  rect(raqueteOponenteX, raqueteOponenteY, larguraOponente, alturaOponente)
}

function movimentoRaquete() {
  if(keyIsDown(UP_ARROW)){
    raqueteY -= 10;
  }
    if(keyIsDown(DOWN_ARROW)){
    raqueteY += 10;
  }
}

function movimentoRaqueteOponente() {
  velocidadeOponenteY  =  yBola - yRaqueteOponente - larguraOponente /2 - 30;
   raqueteOponenteY += velocidadeOponenteY;
}


function colisãoRaquete(){
  if(xBola - raio < raqueteX + largura && yBola - raio < raqueteY + altura && yBola + raio > raqueteY){
    velocidadeX *= -1;
  }
}

function colisãoRaqueteOponente(){
  if(xBola - raio < raqueteOponenteX + larguraOponente && yBola - raio < raqueteOponenteY + alturaOponente && yBola + raio > raqueteOponenteY){
    velocidadeX *= 1;
  }
}

function placar() {
  text(meusPontos, 278, 26)
  text(pontosOponente, 321, 26)
}