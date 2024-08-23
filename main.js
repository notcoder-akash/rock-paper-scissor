
function getComputerChoice(){
    choices=["rock","paper","scissor"]
    compChoice = choices[Math.floor(Math.random()*choices.length)]
    console.log("comp choice is " + compChoice)
    return compChoice
}


function getHumanChoice(){
    humanChoice = prompt('Type ROCK / PAPER / SCISSORS')
    console.log("human choice is " + humanChoice)
    return humanChoice
}

humanScore = 0
computerScore = 0

function playRound(humanChoice,compChoice)
{        
    if(humanChoice==compChoice)
        {
        console.log('Its a draw..!');
    }
    else if(humanChoice==="paper")
        {
        if(compChoice==="rock"){
            console.log("Win Paper wraps Rock");
            humanScore += 1
        }
        else if(compChoice==="scissor"){
            console.log("Lose Scissor cuts Paper");
            computerScore +=1
        }
    }
    else if(humanChoice==="rock"){
        if(compChoice==="paper"){
            console.log("Lose Paper covers rock");
            computerScore += 1
        }
        else if(compChoice==="scissor"){
            console.log("Win Rock destroys Scissor");
            humanScore += 1
        }
    }
    else if(humanChoice==="scissors"){
        if(compChoice==="paper"){
            console.log("Win Scissor cuts Paper");
            humanScore += 1
        }
        else if(compChoice==="rock"){
            console.log("Lose Rock destroys Scissor");
            computerScore += 1
        }
    }
    console.log("Human score is "+humanScore)
    console.log("computer score is "+computerScore)
}


// console.log(getHumanChoice())
// console.log(getComputerChoice())
function playgame(n){
    
    for (i=1;i<n+1;i++){
        console.log("ROUND "+i)
        playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase())
        console.log()
    }
}

playgame(5)

