
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
    //find src img before writing this text
    if(computerChoice === 1 && playerChoice ==="rock"){
        document.getElementById('o-img').src ="";
        document.getElementById('result').innerHTML = "Rock ties with rock. No winner";
    }
    
    
}