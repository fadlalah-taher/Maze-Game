window.onload = function(){

    // Function

    function gameStart(){
        active = true;
        changeBackgroundColor("#eeeeee");
        status.innerHTML = "S   >   E ";
    }

    function gameEnd(){
        if(active){
            active = false;
            score += 5;
            won = true;
            displayResult(won);
        }
    }

    function resetGame(){
        active = false;
        won = true;
        score = 0;
        status.innerHTML = "Game Reset!";
    }

    function cheating(){
        if(active){
            active = false;
            status.innerHTML = "You are Cheating !  Go inside :)";
        }
    }

    function checkBoundries(){
        if(active){
            changeBackgroundColor("red");
            active = false;
            won = false;
            score -= 10;
            displayResult(won);
        }
    }

    function changeBackgroundColor(color){
        for(var i = 0; i < boundaries.length ; i++){
            boundaries[i].style.backgroundColor = color;
        }
    }

    function displayResult(won){
        if(won){
            status.innerHTML = "You Won! Your Score is " + score ;
        }
        else{
            status.innerHTML = "You Lost! Your Score is " + score ;
        }
    }
    // DOM

    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var game = document.getElementById("game");
    var boundaryExample = document.getElementById("example")

    // Variables

    var active = false;
    var won = true;
    var score = 0;

    // Event Listener

    start.addEventListener("click",function(){
        resetGame();
    });

    start.addEventListener("mouseover", function(){
        gameStart();
    });

    end.addEventListener("mouseover", function(){
        gameEnd();
    });

    for(var i = 0; i < boundaries.length ; i++){
        boundaries[i].addEventListener("mouseover",function(){
            checkBoundries();
        });
    }
    
    game.addEventListener("mouseleave", function(){
        cheating();
    });
};