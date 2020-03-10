let game = {
    playerA:{
        ready: false,
        current: null,
        score: 0
    },
    playerB:{
        ready: false,
        current: null,
        score: 0
    },
    play:["Rock","Paper","Scissors"]
}

//functions
function resetTurn(){
    debugger;
    game.playerA.ready=false;
    game.playerB.ready=false;
    game.playerA.current=null;
    game.playerB.current=null;
    $(".ready").show();
}
function playerReady(){
    $(".playerAready").click(function (e) { 
        e.preventDefault();
        $(this).addClass("playerReady");
        game.playerA.ready=true;
    });
    $(".playerBready").click(function (e) { 
        e.preventDefault();
        $(this).addClass("playerReady");
        game.playerB.ready=true;
    });
}
function rockPaperScissors(){
    return game.play[Math.floor(Math.random() * 3)];
}
function getHandImg(hand,player){
    let side;
    let url;

    if(player == "A")
    {
        side="l"
    }
    else{
        side="r"
    }

    if(hand == "Rock"){
        url= `rock_${side}.png`;
    }
    else if(hand == "Paper"){
        url= `paper_${side}.png`;
    }
    else{
        url= `scissors_${side}.png`;
    }
    return url;
}
function startGame(){
    game.playerA.current = rockPaperScissors();
    game.playerB.current = rockPaperScissors();
    let handA = game.playerA.current;
    let handB = game.playerB.current;

    $(".handA").attr("src",`img/${getHandImg(handA,"A")}`);
    resetTurn();
    $(".handB").attr("src",`img/${getHandImg(handB,"B")}`);

}
function checkReady(){
    $(".ready").click(function (e) { 
        e.preventDefault();
        if(game.playerA.ready == true && game.playerB.ready == true )
        {
            startGame();
            $(".ready").hide();
        }
    });
}

$("section").hide();
$(".game").show();


$(document).ready(function () {
    playerReady();
    checkReady();
});
