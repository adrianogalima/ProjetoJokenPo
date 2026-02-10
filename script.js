const result = document.querySelector('.result');

const myScore = document.querySelector ('#human-score');
const alexaScore = document.querySelector('#alexa-score');

let humanPoints = 0;
let alexaPoints = 0;

const GAME_CHOICES = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}


const playHuman = (humanChoice) => {
    playTheGame (humanChoice, playAlexa());
}

const playAlexa = () => {
    const choices = [GAME_CHOICES.rock, GAME_CHOICES.paper, GAME_CHOICES.scissors];
    const randomNumber = Math.floor(Math.random() * 3); // gera um número aleatório entre 0 e 3

    return choices[randomNumber]; // retorna a escolha correspondente ao número aleatório
 } 

 const playTheGame = (human, machine) => {
   console.log ("Humano escolheu: " + human + " e Alexa escolheu: " + machine)
   if (human === machine) {
       result.innerHTML = "Empate!";
   } else if ((human ===  GAME_CHOICES.rock && machine === GAME_CHOICES.scissors) || 
              (human === GAME_CHOICES.paper && machine === GAME_CHOICES.rock) || 
              (human === GAME_CHOICES.scissors && machine === GAME_CHOICES.paper)) {
       result.innerHTML = "Você venceu!";
       humanPoints++;
       myScore.innerHTML = humanPoints;
   } else {
       result.innerHTML = "Alexa venceu!";
       alexaPoints++;
       alexaScore.innerHTML = alexaPoints;
   }    
}