// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama
// Star wars, 12, ficção científica

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
  let recomendacao = geraRecomendacao(idade);
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
        return "Star Wars"
      }
    }
  }
  else {
    return "viagem de chihiro";
  }
}