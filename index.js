
const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hrsHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date()

    //seconds
    const seconds = now.getSeconds();
    const secondsInDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsInDegree}deg)`;

    //mins
    const minutes = now.getMinutes();
    const minutesInDeg = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesInDeg}deg)`;

    //hrs
    const hrs = now.getHours();
    const hrsInDeg = ((hrs / 12) * 360) + ((minutes / 60) * 30) + 90;
    hrsHand.style.transform = `rotate(${hrsInDeg}deg)`;
}

setInterval(setDate, 1000)