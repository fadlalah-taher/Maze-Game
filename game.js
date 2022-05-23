window.onload = function(){

    // Function
    var startt;
    function gameStart(){
        active = true;
        //startt = new Date().getTime();
        //startt = Date.now();
        //clearInterval(timerVariable);
        //console.log(startt);
        var timerVariable = setInterval(countUpTimer, 1000);
        changeBackgroundColor("#eeeeee");
        status.innerHTML = "S   >   E ";
    }

    function lastScore(value){
        if(value > 0){
            last.innerHTML = "Last " + value ;
        }   
    }
    //var timerVariable = setInterval(countUpTimer, 1000);
    var totalSeconds = 0;
    function countUpTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        var minute = Math.floor((totalSeconds - hour * 3600) / 60);
        var seconds = totalSeconds - (hour * 3600 + minute * 60);
        
        live.innerHTML =  minute + ":" + seconds;
      }
    var millis;
    function gameEnd(){
        if(active){
            active = false;
            score += 5;
            won = true;
            displayResult(won);
            console.log(startt);
            var milliseconds = Date.now() - startt;
            console.log("mill"+ milliseconds)
            console.log('Seconds passed = ' + milliseconds / 1000);
            millis = milliseconds / 1000;
            lastScore(millis);
            /*var end = new Date().getTime();
            var time = end - startt;
            console.log(startt);
            console.log(end);
            console.log("time"+ time);*/
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
            status.innerHTML = "You Won!" + score ;
            yourScore.innerHTML = "Your Score " + score ;
        }
        else{
            status.innerHTML = "You Lost!" + score ;
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