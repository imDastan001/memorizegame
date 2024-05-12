var userClickedPattern=[];
var gamePattern=[];
var buttonColor=["red","blue","green","yellow"];
var started = true;
var level=0;
var statement;
var totalclicked=1;

$(document).keydown(function(event){
 
    if(started){
        started = false;
        nextsequence();
       
    }
});

$(".start-btn").click(function(){
    if(started){
        started = false;
        $(this).hide();
        nextsequence();
       
    }
})


function nextsequence(){
    level++;
    $("h1").text("Level "+level);
    var randonNumber = (Math.floor(Math.random()*4));
    var randomChoosenColor=buttonColor[randonNumber];
    gamePattern.push(randomChoosenColor);
    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsong(randomChoosenColor);
    userClickedPattern=[];
    totalclicked=1;

}

function checkAnswer(){
    for(var i = 0 ; i<userClickedPattern.length;i++){
        if(userClickedPattern[i]!=gamePattern[i]){
            statement="wrong";
            console.log(statement);
            gameOver();
        }
       
    }
}
function gameOver(){
    var gameOv = new Audio("./sounds/wrong.mp3");
    gameOv.play();
    $("body").toggleClass("game-over");
    setTimeout(function(){
        $("body").toggleClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart")
    $(".start-btn").show();
    started = true;
    gamePattern=[];
    userClickedPattern=[];
    level=0;
   

}














$(".btn").click(function(event){
 
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playsong(userChosenColor);  
    checkAnswer(); 
    if(level===totalclicked){
    setTimeout(function(){
        nextsequence();

    },800);
    }
    totalclicked++;

});

function animatePress(color){
    $("#"+color).toggleClass("pressed");
    setTimeout(function(){
        $("#"+color).toggleClass("pressed");

    },100);
    
}

function playsong(color){
    switch (color){
        case "green":
        var green=new Audio("./sounds/green.mp3");
        green.play();
        break;
        
        case "blue":
        var blue=new Audio("./sounds/blue.mp3");
        blue.play();
        break;
        
        case "red":
        var red=new Audio("./sounds/red.mp3");
        red.play();
        break;
        
        case "yellow":
        var yellow=new Audio("./sounds/yellow.mp3");
        yellow.play();
        break;
    }
}