let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let escolhaHuman = prompt("Digite sua opção: ");
  escolhaHuman = escolhaHuman.toLowerCase().trim();

  if (
    escolhaHuman !== "pedra" &&
    escolhaHuman !== "papel" &&
    escolhaHuman !== "tesoura"
  ) {
    return prompt("Digite novamente:");
  }

  return escolhaHuman;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase().trim();
  computerChoice = computerChoice.toLowerCase().trim();

  console.log("Humano escolheu:", humanChoice);
  console.log("Computador escolheu:", computerChoice);
  if (humanChoice === "pedra" && computerChoice === "tesoura") {
    console.log("Você venceu !!");
    humanScore++;
  } else if (humanChoice === "tesoura" && computerChoice === "papel") {
    console.log("Você venceu !!");
    humanScore++;
  } else if (humanChoice === "papel" && computerChoice === "pedra") {
    console.log("Você venceu !!");
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Empate !!");
  } else {
    console.log("Você perdeu !!");
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  console.log("Placar final:");
  console.log("Humano:", humanScore);
  console.log("Computador:", computerScore);
}

playGame();
console.log("FIM");
