let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const comScorePara = document.querySelector("#compScore"); 

const genComputerChoice = () =>{
  let comOption = ["rock","paper","scissors"];
  const ranInd = Math.floor(Math.random() * 3)
  return comOption[ranInd];
} 

const drawGame = ()=>{
  console.log("!Game is Draw!");
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "#d3d3d3"
}
const showWinner = (userWin, userChoice, comChoice)=>{
  if(userWin){
    userScore++;
    console.log("User Win");
    msg.innerText = `You Win!!! your ${userChoice} beats computer choice ${comChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = `${userScore}`;

  }else{
    comScore++;
    console.log("You Loss");
    msg.innerText = `You Loss!!! Computer ${comChoice} beats  Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    comScorePara.innerText = `${comScore}`;
  }
}

const playGame = (userChoice)=>{
  console.log("User choice is :",userChoice);
  const comChoice = genComputerChoice();
  console.log("computer choice is:", comChoice);
  if(userChoice === comChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = comChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      userWin = comChoice === "scissors" ? false : true;
    }else{
      userWin = comChoice === "rock" ? false : true;
    }
    
  showWinner(userWin, userChoice, comChoice);
  }

}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
