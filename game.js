window.onload = function(){
    var timerVariable;
    var count = 0;
    // Function
    var startt;
    function gameStart(){
        active = true;
        timerVariable = setInterval(countUpTimer, 1000);
        changeBackgroundColor("#eeeeee");
        status.innerHTML = "S   >   E ";
        count = count + 1;
    }

    function lastScore(value){
        if(value > 0){
            last.innerHTML = "Last " + value ;
        }   
    }
    var seconds;
    var minute;
    var hour;
    //var timerVariable = setInterval(countUpTimer, 1000);
    var totalSeconds = 0;
    function countUpTimer() {
        ++totalSeconds;
        hour = Math.floor(totalSeconds / 3600);
        minute = Math.floor((totalSeconds - hour * 3600) / 60);
        seconds = totalSeconds - (hour * 3600 + minute * 60);
        
        live.innerHTML = "live <br>"+ minute + ":" + seconds;
      }
      function stopInterval(){
        clearInterval(timerVariable);
        totalSeconds = 0;
      }
    var millis;
    function gameEnd(){
        if(active){
            active = false;
            score += 5;
            won = true;
            displayResult(won);
            stopInterval();
            displaybestlast(won);
            //displaybestlast(result)
        }
    }
    // Restart
    function restartGame(){
        active = false;
        won = true;
        score = 0;
        status.innerHTML = "Restart Game!";
        changeBackgroundColor("#eeeeee");
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
            displayResult(won);
            stopInterval();
        }
    }

    function changeBackgroundColor(color){
        for(var i = 0; i < boundaries.length ; i++){
            boundaries[i].style.backgroundColor = color;
        }
    }
    var maxSecond = 0;
    var minSecond = 0;
    function displaybestlast(result){
        //var maxSecond = 0;
        if(result == true){
        if(seconds > 0 && count == 1){
            maxSecond = seconds;
            minSecond = seconds;
            best.innerHTML = "Best <br>"+ minute + ":" + maxSecond;
            last.innerHTML = "Last <br>"+ minute + ":" + maxSecond;
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
        /*if(result == true){
            if(seconds > 0){
            best.innerHTML = "best <br>"+ minute + ":" + seconds;
        }
        }*/
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
    //var boundaryExample = document.getElementsByClassName("example");
    

    // Variables

    var active = false;
    var won = true;
    var score = 0;

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
/*var start = new Date().getTime();

for (i = 0; i < 50000; ++i) {
// do something
}

var end = new Date().getTime();
var time = end - start;
alert('Execution time: ' + time); */