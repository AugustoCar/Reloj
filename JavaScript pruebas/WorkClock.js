//sound of the alarm
var sound = new Audio("https://www.youtube.com/watch?v=8xz9s_-sO1I&ab_channel=CriticalRoleCriticalRoleVerificada");
sound.loop = true;

//setting the time of the clock with the computer 
var hr = document.getElementById('hr');
var min = document.getElementById('min');
var sec = document.getElementById('sec');


function initClock(){

    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourDeg = hour * 30;
    var minuteDeg = minute * 6;
    var secondDeg = second * 6;
    
    hr.style.transform = 'rotate(' + hourDeg + 'deg)';
    mn.style.transform = 'rotate(' + minuteDeg + 'deg)'; 
    sc.style.transform = 'rotate(' + secondDeg + 'deg)'; 

    setTimeout(initClock, 1000);
};

initClock();

//functions to get hour, min, secs, am or pm, add zero, set alarm time and sound, clear alarm

function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

function hoursMenu(){
 var select = document.getElementById('alarmHr');


 var hrs = 12;

 for(i = 1; i <= hrs; i++){

    select.options[select.options.length] = new Option(i < i ? "0" + 1: i, i);
    }

}hoursMenu();

function minsMenu(){
 var select = document.getElementById('alarmMin');


 var min = 59;

 for(i = 0; i <= min; i++){

    select.options[select.options.length] = new Option(i < i ? "0" + 1: i, i);
    }

}minsMenu();

function secsMenu(){
 var select = document.getElementById('alarmSec');


 var sec = 59;

 for(i = 0; i <= sec; i++){

    select.options[select.options.length] = new Option(i < i ? "0" + 1: i, i);
    }

}secsMenu();

function alarmClear() {

	document.getElementById('alarmHr').disabled = false;
	document.getElementById('alarmMin').disabled = false;
	document.getElementById('alarmSec').disabled = false;
	sound.pause();
}
