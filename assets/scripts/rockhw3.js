var yourScore = 0;
var compScore = 0;
var yourChoice = 0;
var compChoice = 0;
var compString = " ";
var rock = 0;
var paper = 0;
var scissors = 0;

  $(document).ready(function(){
    $("#yourscore").html(yourScore);
    $("#computerscore").html(compScore);
    $("#rockwins").html(rock);
    $("#paperwins").html(paper);
    $("#scissorwins").html(scissors);  
    

   $("#rock").click(function(){
   $("#result").css("line-height", "2em");
   $("#result").css("text-align", "center");
    yourChoice = 1;
    compChoice = Math.floor(1+Math.random()*3);
    switch (compChoice){
       case 1:
          compString = "ROCK.<br/>It's a tie!";
          break;
       case 2:
          compString = "PAPER.<br/>You lost this round.";
          compScore += 1;
          paper += 1;
          $("#pwins").html(paper);
          break;
       case 3:
          compString = "SCISSORS. <br/>You won!";
          yourScore += 1;
          rock += 1;
          $("#rwins").html(rock);
          break;
    }
    $("#result").stop();
    $("#result").fadeOut(0);
    $("#result").fadeIn(700);
    $("#result").html("You chose ROCK.<br/>Computer chose " + compString);
    $("#yourscore").html(yourScore);
    $("#computerscore").html(compScore);
  });
  
   $("#paper").click(function(){
   $("#result").css("line-height", "2em");
   $("#result").css("text-align", "center");
    yourChoice = 2;
    compChoice = Math.floor(1+Math.random()*3);
    switch (compChoice){
       case 1:
          compString = "ROCK.<br/>You won!";
          yourScore += 1;
          paper += 1;
          $("#pwins").html(paper);
          break;
       case 2:
          compString = "PAPER.<br/>This one's a tie!";
          break;
       case 3:
          compString = "SCISSORS. <br/>Computer gets this point.";
          compScore += 1;
          scissors += 1;
          $("#swins").html(scissors);
          break;
    }
    $("#result").stop();
    $("#result").fadeOut(0);
    $("#result").fadeIn(700);
    $("#result").html("You chose PAPER.<br/>Computer chose " + compString);
    $("#yourscore").html(yourScore);
    $("#cpuscore").html(compScore);
  });
  

   $("#scissors").click(function(){
   $("#result").css("line-height", "2em");
   $("#result").css("text-align", "center");
    yourChoice = 3;
    compChoice = Math.floor(1+Math.random()*3);
    switch (compChoice){
       case 1:
          compString = "ROCK.<br/>Computer wins this one.";
          compScore += 1;
          rock += 1;
          $("#rwins").html(rock);
          break;
       case 2:
          compString = "PAPER.<br/>You won the round!";
          yourScore += 1;
          scissors += 1;
          $("#swins").html(scissors);
          break;
       case 3:
          compString = "SCISSORS. <br/>All tied up this round!";
          break;
    }
    $("#result").stop();
    $("#result").fadeOut(0);
    $("#result").fadeIn(700);
    $("#result").html("You chose SCISSORS.<br/>Computer chose " + compString);
    $("#yourscore").html(yourScore);
    $("#cpuscore").html(compScore);
  });

  });


