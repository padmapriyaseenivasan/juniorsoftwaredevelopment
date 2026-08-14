let num=Number(prompt("enter the number"));
if((num%3==0)&&(num%5==0))
{
    document.write("Fizzbus"+"<br>");
}
else if(num%3==0)
{
     document.write("Fizz"+"<br>");
}
else if(num%5==0)
{
     document.write("bus"+"<br>");
}
else{
    document.write("invalid"+num+"<br>");
}

let day=Number(prompt("enter the day"));
if(day==1){
    document.write("Sunday"+"<br>");
}
else if(day==2){
    document.write("Monday"+"<br>");
}
else if(day==3){
    document.write("tuesday"+"<br>");
}
else if(day==4){
    document.write("wednesday"+"<br>");
}
 else if(day==5){
    document.write("thursday"+"<br>");
}
else if(day==6){
    document.write("friday"+"<br>");
}
else if(day==7){
    document.write("Saturday"+"<br>");
}
else{
    document.write("no week days"+"<br>")
}

let a=Number(prompt("enter the a value"));
let b=Number(prompt("enter the b value"));
let c=Number(prompt("enter the c value"));
if(c==1){
    document.write("addition of a and b"+a+b+"<br>");
}
else if(c==2){
    document.write("Subtraction of a and b"+a-b+"<br>");
}
else{
    document.write("no operation"+"<br>");
}
