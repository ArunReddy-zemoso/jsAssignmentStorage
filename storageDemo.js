let localplus=document.getElementById('localplus');
let localminus=document.getElementById('localminus');
let sessionplus=document.getElementById('sessionplus');
let sessionminus=document.getElementById('sessionminus');

let localScoreDisplay=document.getElementById('localScore');
let sessionScoreDisplay=document.getElementById('sessionScore');

var localscore;
var sessionscore;
if(localStorage.getItem('localscore')===null){
    localStorage.setItem('localscore',0);
    localscore=0
}
else{
    localscore=parseInt(localStorage.getItem('localscore'));
    localScoreDisplay.innerHTML=localscore;
}

if(sessionStorage.getItem('sessionscore')===null){
    sessionStorage.setItem('sessionscore',0);
    sessionscore=0
}
else{
    sessionscore=parseInt(sessionStorage.getItem('sessionscore'));
    sessionScoreDisplay.innerHTML=sessionscore;
}


localplus.addEventListener('click',function(){
    localscore++;
    localScoreDisplay.innerHTML=localscore;
    localStorage.setItem('localscore',localscore);
})

localminus.addEventListener('click',function(){
    localscore--;
    localScoreDisplay.innerHTML=localscore;
    localStorage.setItem('localscore',localscore);
})

sessionplus.addEventListener('click',function(){
    sessionscore++;
    sessionScoreDisplay.innerHTML=sessionscore;
    sessionStorage.setItem('sessionscore',sessionscore);
})

sessionminus.addEventListener('click',function(){
    sessionscore--;
    sessionScoreDisplay.innerHTML=sessionscore;
    sessionStorage.setItem('sessionscore',sessionscore);
})