

var numberofWins1=0;
var numberofWins2=0;
var moves=10;

$(".play").on("click", function (){
    var randomNumber1=Math.floor((Math.random()*6)+1);
    var randomNumber2=Math.floor((Math.random()*6)+1);
    $(".img1").attr("src",'images/dice'+randomNumber1+'.png');
    $(".img2").attr("src",'images/dice'+randomNumber2+'.png');

    if(randomNumber1>randomNumber2){
      $("h1").text("🚩Player 1 wins");
      numberofWins1+=1;
      $(".score1").text(numberofWins1);
    }
    else if (randomNumber2>randomNumber1){
      $("h1").text("Player 2 wins🚩");
      numberofWins2+=1;
      $(".score2").text(numberofWins2);
    }
    else{
      $("h1").text("Draw");
    }
    moves-=1;
    $(".moves").text("Moves Left are "+moves);
    if(moves === 0 && numberofWins1>numberofWins2){
      $("h1").text("Player 1 Wins All");
      $(".play").addClass("invisible");
      var kick = new Audio("gamewin.mp3");
      kick.play();
    }
    else if(moves === 0 && numberofWins2>numberofWins1){
        $("h1").text("Player 2 Wins All");
        $(".play").addClass("invisible");
        var kick = new Audio("gamewin.mp3");
        kick.play();
    }else if(moves === 0 &&  numberofWins1 === numberofWins2){
        $("h1").text("Draw Overall");
        $(".play").addClass("invisible");
    }

  }
);

$(".restart").on("click",function(){
  numberofWins1=0;
  $(".score1").text(numberofWins1);
  numberofWins2=0;
  $(".score2").text(numberofWins2);
  moves=10;
  $(".moves").text("Moves Left are "+moves);
  $(".play").removeClass("invisible");
  $("h1").text("Play Me");
});
