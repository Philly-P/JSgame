
function play(choice)
{
    let playerChoice = choice;
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let wins = sessionStorage.getItem("winCount");
    let loss = sessionStorage.getItem("lossCount");
    let tie = sessionStorage.getItem("tieCount");
    if(wins == null)
    {

    }else if(loss == null)
    {
        
    }
}