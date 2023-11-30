
function play(choice)
{
    let playerChoice = choice;
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let wins = sessionStorage.getItem("winCount");
    let loss = sessionStorage.getItem("lossCount");
    let tie = sessionStorage.getItem("tieCount");
    if(wins == null)
    {
        wins = 0;
    }else{
        wins = wins;
    };
     if(loss == null)
    {
        loss = 0;
    }else {
        loss = loss;
    };
    if(tie = null)
    {
        tie = 0;
    }else{
        tie = tie;
    };
    //find src img before writing this text 1 = rock; 2 = paper; 3 = scissors
    setTimeout(() => {
    if(computerChoice === 1 && playerChoice ==="rock"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Rock ties with rock. No winner";
        ++tie;
    }else if(computerChoice === 1 && playerChoice ==="scissors"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Scissors losses to rock. You lost";
        ++loss;
    }else if(computerChoice === 1 && playerChoice ==="paper"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Paper beats rock. you win";
        ++wins;
    }else if(computerChoice === 2 && playerChoice ==="rock"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Rock loses to paper. you lose";
        ++loss;
    }else if(computerChoice === 2 && playerChoice ==="paper"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Paper ties with paper. No winner";
        ++ties;
    }else if(computerChoice === 2 && playerChoice ==="scissors"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Scissors beats paper. you win";
        ++wins;
    }else if(computerChoice === 3 && playerChoice ==="rock"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Rock beats Scissors. you win";
        ++wins;
    }else if(computerChoice === 3 && playerChoice ==="paper"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "paper loses to Scissors. you lose";
        ++loss;
    }else {
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Scissors ties with Scissors. No winner";
        ++ties;
    }
    sessionStorage("winCount", wins);
    sessionStorage("lossCount", loss);
    sessionStorage("tieCount", ties);
    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('loss').innerHTML = sessionStorage.getItem("lossCount");
    document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
    }, 200);
}

function restart() {

}