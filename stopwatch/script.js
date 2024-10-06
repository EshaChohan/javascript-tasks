var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var minute = 00;
var second = 00;
var millisecond = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById("minute").innerHTML = "00" +":";
    document.getElementById("second").innerHTML = "00" + ":";
    document.getElementById("millisecond").innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        millisecond++;

        if (millisecond == 100) {
            second++;
            millisecond = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }
       
        var minString = minute +":";
        var secString = second +":";
        var millisecondString = millisecond;

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (millisecond < 10) {
            millisecondString = "0" + millisecondString;
        }

        document.getElementById("minute").innerHTML = minString;
        document.getElementById("second").innerHTML = secString;
        document.getElementById("millisecond").innerHTML = millisecondString;
        setTimeout(stopWatch, 10);
    }
}
