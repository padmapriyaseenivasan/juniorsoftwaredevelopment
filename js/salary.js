
let salary=Number(prompt("enter the salary"));
let wd=Number(prompt("enter the total working days"));
let present=Number(prompt("enter the present days"));
let perday=salary/wd;
let ts=present*perday;
let bonus=salary*5/100;
let final=ts+bonus;
document.write("<h1> salary</h1>")
document.write("total salary with bonuspercentage is:" +final+"<br>");

document.write("<h1> salary2 </hr>")
let salary2=Number(prompt("enter the salary"));
let wd2=Number(prompt("enter the total working days"));
let present2=Number(prompt("enter the present days"));
let perday2=salary2/wd2;
let ts2=present2*perday2;
let bonus2=Number(prompt("enter the bonus amount"));
let final2=ts2+bonus2;
document.write("total salary with bonus is:" +final2+"<br>");

document.write("<h1> salary3 </hr>")
let salary3=15000;
let wd3=26;
let present3=10;
let perday3=salary3/wd3;
let ts3=present3*perday3;
let fine=500;
let final3=ts3-fine;

document.write("total salary with fine is:" +final3+"<br>");