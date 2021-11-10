var dance = document.getElementById("everybodydance");


function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String(timeLeft);
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    } else if (timeLeft == 0) {
        var x = document.getElementById("myAudio");
        x.play();
        document.getElementById("seconds").innerHTML = "Time Out";
    }
};


dance.addEventListener('click', function(event) {
    timeLeft = 5;
    setTimeout(countdown, 1000);
});