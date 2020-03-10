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
    currentResult:null,
    play:["Rock","Paper","Scissors"],
    gamePlay:[{
        set: "Rock",
        kill: "Scissors"
    },{
        set: "Paper",
        kill: "Rock"
    },{
        set: "Scissors",
        kill: "Paper"
    }],
    log:["Click Ready to start"]
}

//functions
function resetTurn(){
    debugger;
    game.playerA.ready=false;
    game.playerB.ready=false;
    game.playerA.current=null;
    game.playerB.current=null;
    game.playerB.currentResult=null;
    $(".ready").show();
}
function playerReady(){
    $(".gameLog").html(game.log[game.log.length-1]);
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
    else if(hand == "Scissors"){
        url= `scissors_${side}.png`;
    }
    return url;
}
function startGame(){
    game.playerA.current = rockPaperScissors();
    game.playerB.current = rockPaperScissors();

    let handA = game.playerA.current;
    let handB = game.playerB.current;

    console.log(handA);
    console.log(handB);

    $(".handA").attr("src",`img/${getHandImg(handA,"A")}`);
    $(".handB").attr("src",`img/${getHandImg(handB,"B")}`);

    if(handA == handB){
        game.currentResult= "Draw";
        game.log.push("Draw");
    }
    else if(handA == "Rock"){
        if(handB == "Scissors"){
            game.currentResult= "A";
            game.playerA.score++;
            game.log.push("Rock hits Scissors");
        }
        else{
            game.currentResult= "B";
            game.playerB.score++;
            game.log.push("Paper wraps Rock");
        }
    }
    else if(handA == "Paper"){
        if(handB == "Rock"){
            game.currentResult= "A";
            game.playerA.score++;
            game.log.push("Paper wraps Rock");
        }
        else{
            game.currentResult= "B";
            game.playerB.score++;
            game.log.push("Scissors cuts Paper");
        }
    }
    else if(handA == "Scissors"){
        if(handB == "Paper"){
            game.currentResult= "A",
            game.playerA.score++;
            game.log.push("Scissors cuts Paper");
        }
        else{
            game.currentResult= "B";
            game.playerB.score++;
            game.log.push("Rock hits Scissors");
        }
    }
    console.log("Result : "+game.currentResult);
    console.log(game.playerA.current+" A : "+game.playerA.score);
    console.log(game.playerB.current+" B : "+game.playerB.score);
    $(".scoreA").html(game.playerA.score);
    $(".scoreB").html(game.playerB.score);
    $(".ready").show();
}
function checkReady(){
    $(".ready").click(function (e) { 
        e.preventDefault();
        if(game.playerA.ready == true && game.playerB.ready == true )
        {
            startGame();
            $(".ready").removeClass("playerReady");
            game.playerA.ready=false;
            game.playerB.ready=false;
            $(".gameLog").html(game.log[game.log.length-1]);
            console.log(game.log[game.log.length-1]);
        }
    });
}

$("section").hide();
$(".game").show();


$(document).ready(function () {
    playerReady();
    checkReady();
});
