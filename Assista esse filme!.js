// a viagem de chihiro, LIVRE, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// Memorias do ontem, 10, romance, drama
// o menino que descobriu o vento, 14, drama

let idadeUser;
let fantasiaUser;

function setup() {
  createCanvas(400, 400);
  idadeUser = createImput();
  createCheckbox("gostaDeFantasia") 
}

function draw() {
  background(220);
  let idade = idadeUser.value;
  let gostaDeFantasia = fantasiaUser.checked;
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  fill(color(125, 5, 50));
  textSize(38);
  textAlign(CENTER, CENTER);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "o menino que descobriu o vento";
    } else {
      if(gostaDeFantasia) {
        return "as aventuras de pi";  
      } else {
        return "Memorias do ontem";
      }
    }
  }
  else {
    if(gostaDeFantasia) {
      return "viagem de chihiro";
    } else {
      return "Meu amigo totoro";
    }
  }
}