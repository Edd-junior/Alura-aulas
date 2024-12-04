// a viagem de chihiro, LIVRE, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// Memorias do ontem, 10, romance, drama
// o menino que descobriu o vento, 14, drama
// Star

//Style css: 
//margin:30px;
//background-color: rgb();

let idadeUser;
let fantasiaBox;
let aventuraBox;

function setup(idadeUser,) {
  createCanvas(400, 400);
  createElement("h2", "Assista esse filme!");
  createSpan("Sua idade:");
  idadeUser = createImput();
  createCheckbox("Gosta de fantasia?");
  createCheckbox("Gosta de aventura?") 
}

function draw(idadeUser, fantasiaBox, aventuraBox) {
  background(220);
  let idade = idadeUser.value();
  let gostaDeFantasia = fantasiaBox.checked();
  let gostaDeAventura = aventuraBox.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  fill(color(76, 5, 115));
  textSize(38);
  textAlign(CENTER, CENTER);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "o menino que descobriu o vento";
    } else {
      if(idade >= 12){
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem Aranha no aranha verso";
        }
        return "Star Wars";
      } else {
      if(gostaDeFantasia) {
        return "as aventuras de pi";  
      } else {
        return "Memorias do ontem";
      }
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