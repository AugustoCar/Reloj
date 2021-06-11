//sound of the alarm
var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
sound.loop = true;

//setting the time of the clock with the computer 
var hr = document.getElementById('hr');
var mn = document.getElementById('mn');
var sc = document.getElementById('sc');
//var clearButton = document.getElementById('clearButton');

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


 var hrs = 24;

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

function alarmSet() {

	var hr = document.getElementById('alarmHr');
	
	var min = document.getElementById('alarmMin');
	
	var sec = document.getElementById('alarmSec');
	
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmHr').disabled = true;
	document.getElementById('alarmMin').disabled = true;
	document.getElementById('alarmSec').disabled = true;


//when alarmtime is equal to currenttime then play a sound
	var clock = document.getElementById('clock');

    
//function to compare current time to the alarm
setInterval(function(){

    var date = new Date();

    var hour = date.getHours();

    var minutes = date.getMinutes();
    
    var seconds = date.getSeconds();

    var currentTime = addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds) + "";
	

	if (alarmTime == currentTime) {
		
        sound.play();		
    }

},1000);

function alarmClear() {

	document.getElementById('alarmHr').disabled = false;
	document.getElementById('alarmMin').disabled = false;
	document.getElementById('alarmSec').disabled = false;
	sound.pause();
}
}
