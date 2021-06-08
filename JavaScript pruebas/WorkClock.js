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