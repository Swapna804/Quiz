//window.alert("Welcome to quiz ")
function ready(){


const total =3;
var score = 0;
const res= document.querySelector('.result');
const q1=document.forms['quiz']["q1"].value;
const q2=document.forms['quiz']["q2"].value;
const q3=document.forms['quiz']["q3"].value;
const fa = document.querySelector('.fa');
console.log(fa);

//validate
for(i=1;i<=total;i++){
    if(eval('q'+i)==null||eval('q'+i)==''){
        alert("you missed question"+i);
        return false;
    }
}
//set answer
const ans=['c','c','a'];

for(i=1;i<=total;i++){
    if(eval('q'+i)==ans[i-1]){
       score++;
    }
}
alert(score);
fa.innerHTML=score;
return false;
}