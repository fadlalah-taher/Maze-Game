window.onload = function(){


     // DOM

     var boundaries = document.getElementsByClassName("boundary");
     var start = document.getElementById("start");
     var end = document.getElementById("end");
     var status = document.getElementById("status");
     var game = document.getElementById("game");
     var last = document.getElementById("last");
     var best = document.getElementById("best");
     var yourScore = document.getElementById("score");
     var live = document.getElementById("live");


    // Variables

    var active = false;
    var won = true;
    var score = 0;
    // countUp Variables
    var maxSecond = 0;
    var minSecond = 0;
    var seconds = 0;
    var minute = 0;
    var hour= 0;
    var timerVariable;
    var count = 0;
    var totalSeconds = 0;


    // Function

    function gameStart(){
        active = true;
        timerVariable = setInterval(countUpTimer, 1000);
        changeBackgroundColor("#eeeeee");
        status.innerHTML = "Game On S   >   E ";
        count++;
    }
    
    // countUp Timer
    function countUpTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        minute = Math.floor((totalSeconds - hour * 3600) / 60);
        seconds = totalSeconds - (hour * 3600 + minute * 60);
        console.log("countUp"+ seconds);
        live.innerHTML = "live <br>"+ minute + ":" + seconds;
      }

    function stopInterval(){
        clearInterval(timerVariable);
        totalSeconds = 0;
    }

    function gameEnd(){
        if(active){
            active = false;
            score += 5;
            won = true;
            displayResult(won);
            stopInterval();
            displaybestlast(won);
        }
    }

    // Restart
    function restartGame(){
        active = false;
        won = true;
        score = 0;
        status.innerHTML = "Restart Game!";
        yourScore.innerHTML = "Your Score " + score ;
        changeBackgroundColor("#eeeeee");
        stopInterval();  
        restartlive();
        count = 0;
    }

    function restartlive(){
        best.innerHTML = "Best <br>"+ 0 + ":" + 0;
        live.innerHTML = "Last <br>"+ 0 + ":" + 0;
        last.innerHTML = "Last <br>"+ 0 + ":" + 0;
    }

    function cheating(){
        if(active){
            active = false;
            status.innerHTML = "You are Cheating !  Go inside :)";
            stopInterval();
        }
    }

    function checkBoundries(){
        if(active){
            changeBackgroundColor("red");
            active = false;
            won = false;
            score -= 10;
            count--;
            displayResult(won);
            stopInterval();
        }
    }

    function changeBackgroundColor(color){
        for(var i = 0; i < boundaries.length ; i++){
            boundaries[i].style.backgroundColor = color;
        }
    }
    
    function displaybestlast(result){
        if(result == true){
            if(count == 1){//seconds > 0 && 
                maxSecond = seconds;
                minSecond = seconds;
                best.innerHTML = "Best <br>"+ minute + ":" + maxSecond;
                last.innerHTML = "Last <br>"+ minute + ":" + minSecond;
                console.log("first");
            }
            else if(minSecond > seconds){
                minSecond = seconds;
                console.log("previous is bigger");
                best.innerHTML = "Best <br>"+ minute + ":" + minSecond;
            }
            else if (maxSecond < seconds){
                maxSecond = seconds;
                console.log("second bigger");
                last.innerHTML = "Last <br>"+ minute + ":" + seconds;
            }
        }
    }

    function displayResult(won){
        if(won){
            status.innerHTML = "You Won!";
            yourScore.innerHTML = "Your Score " + score ;
        }
        else{
            status.innerHTML = "You Lost!";
            yourScore.innerHTML = "Your Score " + score ;
        }
    }
   
    // Event Listener

    start.addEventListener("click",function(){
        restartGame();
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
