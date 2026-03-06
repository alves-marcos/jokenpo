let humanScore = 0;
let computerScore = 0;

// pegar elementos do DOM
const resultado = document.querySelector("#resultado");
const placar = document.querySelector("#placar");

function getComputerChoice() {
  let escolha = parseInt(Math.random() * 3);
  switch (escolha) {
    case 0:
      return "Pedra";
    case 1:
      return "Papel";
    case 2:
      return "Tesoura";
    default:
      return "Erro";
  }
}

function playRound(humanChoice, computerChoice) {

  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  humanChoice = humanChoice.toLowerCase().trim();
  computerChoice = computerChoice.toLowerCase().trim();

  let mensagem = "";

  if (humanChoice === "pedra" && computerChoice === "tesoura") {
    mensagem = "Você venceu!";
    humanScore++;
  } 
  else if (humanChoice === "tesoura" && computerChoice === "papel") {
    mensagem = "Você venceu!";
    humanScore++;
  } 
  else if (humanChoice === "papel" && computerChoice === "pedra") {
    mensagem = "Você venceu!";
    humanScore++;
  } 
  else if (humanChoice === computerChoice) {
    mensagem = "Empate!";
  } 
  else {
    mensagem = "Você perdeu!";
    computerScore++;
  }

  resultado.textContent =
    "Humano escolheu: " + humanChoice +
    " | Computador escolheu: " + computerChoice +
    " → " + mensagem;

  placar.textContent =
    "Humano: " + humanScore + " | Computador: " + computerScore;
}

const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");

pedra.addEventListener("click", function () {
  playRound("pedra", getComputerChoice());
});

papel.addEventListener("click", function () {
  playRound("papel", getComputerChoice());
});

tesoura.addEventListener("click", function () {
  playRound("tesoura", getComputerChoice());
});

placar.textContent =
  "Humano: " + humanScore + " | Computador: " + computerScore;

if (humanScore === 5) {
  resultado.textContent = "🎉 Você venceu o jogo!";
}

if (computerScore === 5) {
  resultado.textContent = "💻 O computador venceu o jogo!";
}

console.log("FIM");