const endDate = new Date("14 dec, 2029 24:00:00").getTime();
const startDate = new Date().getTime();



let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // claculate days, hours, minu, sec
    // 1 days = 24 * 60 * 60 * 1000 ms

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHoursInMillis = (60 * 60 * 1000);
    const oneMinutesInMillis = (60 * 1000);
    const oneSecondsInMillis = (1000);


    const days = Math.floor(distancePending / (oneDayInMillis));
    const hours = Math.floor((distancePending % (oneDayInMillis) / (oneHoursInMillis)));
    const minutes = Math.floor((distancePending % (oneHoursInMillis)) / (oneMinutesInMillis));
    const seconds = Math.floor((distancePending % (oneMinutesInMillis)) / (oneSecondsInMillis));

    // populate in ui
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // calaculate width percentage for progress bar
    const totalDistance = endDate - startDate;

    const percentageDistance = (distanceCovered / totalDistance) * 100;

    // set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementsById("progress-bar").style.width = "100%";
    }
}
    , 1000);