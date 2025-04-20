//      ---random number generator

let x,y,z,a,b,c,p1=0,p2=0,p1Score=0,p2Score=0,choice,p1name,p2name,tie;

//choice=window.prompt("Enter the number of dices u want to play(max 3). ");


document.getElementById("rollButton").onclick=function(){

    p1name=document.getElementById("p1name").value;
    p2name=document.getElementById("p2name").value;
    document.getElementById("p1Label").innerHTML=p1name;
    document.getElementById("p2Label").innerHTML=p2name;
    let inputElement=document.getElementById('p1name');
    inputElement.style.display='none';
    let inputElement2=document.getElementById('p2name');
    inputElement2.style.display='none';
    choice=document.getElementById("choiceBox").value;
    choice=Number(choice);
    

x=Math.floor(Math.random()*6)+1 ;
y=Math.floor(Math.random()*6)+1 ;
z=Math.floor(Math.random()*6)+1 ;
a=Math.floor(Math.random()*6)+1 ;
b=Math.floor(Math.random()*6)+1 ;
c=Math.floor(Math.random()*6)+1 ;

if(choice==1){
    
    //document.body.appendChild(zar1);
    //var image = document.getElementById("poza1");
    //image.src="diceimage.jpg";

    document.getElementById("poza13").src="dices/invisible.png";
    document.getElementById("poza23").src="dices/invisible.png";
    document.getElementById("poza12").src="dices/invisible.png";
    document.getElementById("poza22").src="dices/invisible.png";

    if(x==1){
        var image = document.getElementById("poza1");
        image.src="dices/dice1.png";
    }
    else if(x==2){
        var image = document.getElementById("poza1");
        image.src="dices/dice2.png";
    }
    else if(x==3){
        var image = document.getElementById("poza1");
        image.src="dices/dice3.png";
    }
    else if(x==4){
        var image = document.getElementById("poza1");
        image.src="dices/dice4.png";
    }
    else if(x==5){
        var image = document.getElementById("poza1");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza1");
        image.src="dices/dice6.png";
    }

    if(a==1){
        var image = document.getElementById("poza2");
        image.src="dices/dice1.png";
    }
    else if(a==2){
        var image = document.getElementById("poza2");
        image.src="dices/dice2.png";
    }
    else if(a==3){
        var image = document.getElementById("poza2");
        image.src="dices/dice3.png";
    }
    else if(a==4){
        var image = document.getElementById("poza2");
        image.src="dices/dice4.png";
    }
    else if(a==5){
        var image = document.getElementById("poza2");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza2");
        image.src="dices/dice6.png";
    }
    p1=Number(x);
    p2=Number(a);
    document.getElementById("xdLabel").innerHTML="You rolled " + p1;
    document.getElementById("dxLabel").innerHTML="You rolled " + p2;
    document.getElementById("error").innerHTML="";
}
else if(choice==2){
    

    document.getElementById("poza13").src="dices/invisible.png";
    document.getElementById("poza23").src="dices/invisible.png";
    
    if(x==1){
        var image = document.getElementById("poza1");
        image.src="dices/dice1.png";
    }
    else if(x==2){
        var image = document.getElementById("poza1");
        image.src="dices/dice2.png";
    }
    else if(x==3){
        var image = document.getElementById("poza1");
        image.src="dices/dice3.png";
    }
    else if(x==4){
        var image = document.getElementById("poza1");
        image.src="dices/dice4.png";
    }
    else if(x==5){
        var image = document.getElementById("poza1");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza1");
        image.src="dices/dice6.png";
    }

    if(a==1){
        var image = document.getElementById("poza2");
        image.src="dices/dice1.png";
    }
    else if(a==2){
        var image = document.getElementById("poza2");
        image.src="dices/dice2.png";
    }
    else if(a==3){
        var image = document.getElementById("poza2");
        image.src="dices/dice3.png";
    }
    else if(a==4){
        var image = document.getElementById("poza2");
        image.src="dices/dice4.png";
    }
    else if(a==5){
        var image = document.getElementById("poza2");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza2");
        image.src="dices/dice6.png";
    }



    if(y==1){
        var image = document.getElementById("poza12");
        image.src="dices/dice1.png";
    }
    else if(y==2){
        var image = document.getElementById("poza12");
        image.src="dices/dice2.png";
    }
    else if(y==3){
        var image = document.getElementById("poza12");
        image.src="dices/dice3.png";
    }
    else if(y==4){
        var image = document.getElementById("poza12");
        image.src="dices/dice4.png";
    }
    else if(y==5){
        var image = document.getElementById("poza12");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza12");
        image.src="dices/dice6.png";
    }

    if(b==1){
        var image = document.getElementById("poza22");
        image.src="dices/dice1.png";
    }
    else if(b==2){
        var image = document.getElementById("poza22");
        image.src="dices/dice2.png";
    }
    else if(b==3){
        var image = document.getElementById("poza22");
        image.src="dices/dice3.png";
    }
    else if(b==4){
        var image = document.getElementById("poza22");
        image.src="dices/dice4.png";
    }
    else if(b==5){
        var image = document.getElementById("poza22");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza22");
        image.src="dices/dice6.png";
    }

    p1=Number(x+y);
    p2=Number(a+b);
    document.getElementById("xdLabel").innerHTML="You rolled " + p1;
    document.getElementById("dxLabel").innerHTML="You rolled " + p2;
    document.getElementById("error").innerHTML="";
}
else if(choice==3){

    if(x==1){
        var image = document.getElementById("poza1");
        image.src="dices/dice1.png";
    }
    else if(x==2){
        var image = document.getElementById("poza1");
        image.src="dices/dice2.png";
    }
    else if(x==3){
        var image = document.getElementById("poza1");
        image.src="dices/dice3.png";
    }
    else if(x==4){
        var image = document.getElementById("poza1");
        image.src="dices/dice4.png";
    }
    else if(x==5){
        var image = document.getElementById("poza1");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza1");
        image.src="dices/dice6.png";
    }

    if(a==1){
        var image = document.getElementById("poza2");
        image.src="dices/dice1.png";
    }
    else if(a==2){
        var image = document.getElementById("poza2");
        image.src="dices/dice2.png";
    }
    else if(a==3){
        var image = document.getElementById("poza2");
        image.src="dices/dice3.png";
    }
    else if(a==4){
        var image = document.getElementById("poza2");
        image.src="dices/dice4.png";
    }
    else if(a==5){
        var image = document.getElementById("poza2");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza2");
        image.src="dices/dice6.png";
    }



    if(y==1){
        var image = document.getElementById("poza12");
        image.src="dices/dice1.png";
    }
    else if(y==2){
        var image = document.getElementById("poza12");
        image.src="dices/dice2.png";
    }
    else if(y==3){
        var image = document.getElementById("poza12");
        image.src="dices/dice3.png";
    }
    else if(y==4){
        var image = document.getElementById("poza12");
        image.src="dices/dice4.png";
    }
    else if(y==5){
        var image = document.getElementById("poza12");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza12");
        image.src="dices/dice6.png";
    }

    if(b==1){
        var image = document.getElementById("poza22");
        image.src="dices/dice1.png";
    }
    else if(b==2){
        var image = document.getElementById("poza22");
        image.src="dices/dice2.png";
    }
    else if(b==3){
        var image = document.getElementById("poza22");
        image.src="dices/dice3.png";
    }
    else if(b==4){
        var image = document.getElementById("poza22");
        image.src="dices/dice4.png";
    }
    else if(b==5){
        var image = document.getElementById("poza22");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza22");
        image.src="dices/dice6.png";
    }


    if(z==1){
        var image = document.getElementById("poza13");
        image.src="dices/dice1.png";
    }
    else if(z==2){
        var image = document.getElementById("poza13");
        image.src="dices/dice2.png";
    }
    else if(z==3){
        var image = document.getElementById("poza13");
        image.src="dices/dice3.png";
    }
    else if(z==4){
        var image = document.getElementById("poza13");
        image.src="dices/dice4.png";
    }
    else if(z==5){
        var image = document.getElementById("poza13");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza13");
        image.src="dices/dice6.png";
    }


    if(c==1){
        var image = document.getElementById("poza23");
        image.src="dices/dice1.png";
    }
    else if(c==2){
        var image = document.getElementById("poza23");
        image.src="dices/dice2.png";
    }
    else if(c==3){
        var image = document.getElementById("poza23");
        image.src="dices/dice3.png";
    }
    else if(c==4){
        var image = document.getElementById("poza23");
        image.src="dices/dice4.png";
    }
    else if(c==5){
        var image = document.getElementById("poza23");
        image.src="dices/dice5.png";
    }
    else {
        var image = document.getElementById("poza23");
        image.src="dices/dice6.png";
    }


    p1=Number(x+y+z);
    p2=Number(a+b+c);
    document.getElementById("xdLabel").innerHTML="You rolled " + p1;
    document.getElementById("dxLabel").innerHTML="You rolled " + p2;
    document.getElementById("error").innerHTML="";
}

else {
    document.getElementById("error").innerHTML=("Error! You need to select a number from 1 to 3 ! ");
    
}


if(choice==1 || choice==2 || choice==3){
if(p1>p2){

    p1Score+=1;
    
}
else if(p1<p2){

    p2Score+=1;
    
}
else {
    tie=1;
};
}

if(p1==p2){

    document.getElementById("score").innerHTML=" Tie Round ! ";
}
else{
document.getElementById("score").innerHTML="Score: "  +  p1name + " " +  "<---  "  +  p1Score +  " - " +   p2Score   + "  ---> " + p2name  ;
}


}