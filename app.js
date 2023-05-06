
var min = 0;
var sec = 0;
var miliSec = 0;

var timer = false;




function start() {
    timer = true;
    stopWatch();

}

function stop() {
    timer = false;

}

function reset() {
    timer = false;
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("minutes").innerHTML = "0"+ min;
    document.getElementById("seconds").innerHTML = "0"+ sec;
    document.getElementById("miliSec").innerHTML = "0"+ miliSec;

}

function stopWatch() {
    if (timer == true) {
        miliSec = miliSec + 1;

        if (miliSec==100) {
            sec++;
            miliSec = 0;
        }

        if (sec==60) {
            min++;
            sec = 0;
        }

        var minString = min;
        var secString = sec;
        var miliString = miliSec;

        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        }
        if(miliSec < 10){
            miliString = "0" + miliString;
        }

        document.getElementById("minutes").innerHTML = minString;
        document.getElementById("seconds").innerHTML = secString;
        document.getElementById("miliSec").innerHTML = miliString;


        setTimeout("stopWatch()", 10)
    }
}