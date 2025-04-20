let guess=0, guesses=1, lastGuess=-1;

let answer=Math.floor(Math.random()*10)+1 ;
                                                        

document.getElementById("increaseButton").onclick=function(){           
    
    guess=document.getElementById("GuessField").value;    
    guess=Number(guess);
    if(guess<10){
    guess+=1;
    document.getElementById("GuessField").value=guess;
    }
}


document.getElementById("decreaseButton").onclick=function(){
    
    guess=document.getElementById("GuessField").value;    
    guess=Number(guess);
    if(guess>1){
    guess-=1;
    document.getElementById("GuessField").value=guess;
    }
}




document.getElementById("SubmitButton").onclick=function(){

    
    guess=document.getElementById("GuessField").value;    
    guess=Number(guess);

    if(guess>0 && guess<11){
             let ok=1; }
    else {
    document.getElementById("xd").innerHTML="Error! You need to select a number between 1-10 !";    
                            }


    


if(guess>0 && guess <11 && lastGuess!=guess){


if(guess>answer){

    var image = document.getElementById("poza1");
        image.src="images/lowerarrow.jpg";
    guesses+=1;
    document.getElementById("xd").innerHTML="Too big!";

}


else if(guess<answer){
    
    var image = document.getElementById("poza1");
        image.src="images/uparrow.png";
    guesses+=1;
    document.getElementById("xd").innerHTML="Too small ! ";
}

else{
    
    var image = document.getElementById("poza1");
        image.src="images/rocklee.jpg";

    document.getElementById("xd").innerHTML="Correct! You found the number " + answer + " in " + guesses + " guesses!";
    if(guesses==1){
    
        var image = document.getElementById("poza1");
        image.src="images/roccalee.jpg";
    }
    guesses=1;
     answer=Math.floor(Math.random()*10)+1 ;
}
lastGuess=guess;

}

}