window.onload = function(){

    // Function

    function checkBoundries(){
        if(active){
            changeBackgroundColor("red");
            active = false;
            won = false;
            score -= 10;
        }
    }

    function changeBackgroundColor(color){
        for(var i = 0; i < boundaries.length ; i++){
            boundaries[i].style.backgroundColor = color;
        }
    }
    // DOM

    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var game = document.getElementById("game");

    // Variables

    var active = false;
    var won = true;
    var score = 0;

    // Event Listener

    for(var i = 0; i < boundaries.length ; i++){
        boundaries[i].addEventListener("mouseover",function(){
            checkBoundries();
        });
    }
};