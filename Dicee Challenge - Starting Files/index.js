var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice"+randomNumber1+".png";
var imageSource = "images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src" , imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var imageSource2 = "images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src" , imageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="o'o ooo... its a draw🥲";
}