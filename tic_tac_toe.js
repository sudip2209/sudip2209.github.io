var start=0;
var end=1;
var arr=[['0','0','0'],['0','0','0'],['0','0','0']];
const game={
    state:start,
    turn:'X',
    move:0,
}
var playerspan=document.getElementById('player');
var gametable=document.getElementById('game_table');
function nextturn()
{
    game.move++;
    if(game.turn=='X')
    {
        game.turn='O';
    }
    else
    {
        game.turn='X';
    }
    if(game.move==9)
    {
        alert("game over");
    }
    playerspan.textContent=game.turn;
}

function boxclicked(row,col)
{
    if(arr[row-1][col-1]=='0')
    {
    arr[row-1][col-1]=game.turn;
    let current_clickbox=gametable.children[0].children[row-1].children[col-1];
    current_clickbox.textContent=game.turn;
    if(row-col==0)
    {
        if(arr[0][0]+arr[1][1]+arr[2][2]=="XXX")
        {
            alert("winner: X");
        }
        else if(arr[0][0]+arr[1][1]+arr[2][2]=="OOO")
        {
            alert("winner: O");
        }
    }
    else if(row+col==4)
    {
        if(arr[0][2]+arr[1][1]+arr[2][0]=="XXX")
        {
            alert("winner: X");
        }
        else if(arr[0][2]+arr[1][1]+arr[2][0]=="OOO")
        {
            alert("winner: O");
        }
    }
    if(arr[row-1][0]+arr[row-1][1]+arr[row-1][2]=="XXX")
    {
            alert("winner: X");
    }
    else if(arr[row-1][0]+arr[row-1][1]+arr[row-1][2]=="OOO")
    {
            alert("winner: O");
    }
    else if(arr[0][col-1]+arr[1][col-1]+arr[2][col-1]=="XXX")
    {
            alert("winner: X");
    }
    else if(arr[0][col-1]+arr[1][col-1]+arr[2][col-1]=="OOO")
    {
            alert("winner: O");
    }
    nextturn();
    }
}