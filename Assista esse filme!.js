// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

let idadeUser;

function setup() {
  createCanvas(400, 400);
  idadeUser = createImput();
}

function draw() {
  background(220);
  let idade = idadeUser.value;
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
  return "as aventura de pi";
  }
  else {
  return "viagem de chihiro";
  }
}