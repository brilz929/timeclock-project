const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');
let totalSecondsDegrees = 0;

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const rawHours = now.getHours();

    const adjustedHours = rawHours + (minutes / 60);

    const secondsDegrees = convertToDegrees(seconds, 60);
    const minutesDegrees = convertToDegrees(minutes, 60);
    const hoursDegrees = convertToDegrees(adjustedHours, 12);

    totalSecondsDegrees += 6;
    
    
    secondsHand.style.transform = `rotate(${totalSecondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function convertToDegrees(currentValue, maxLimit) {
    return ((currentValue / maxLimit) * 360) + 90;
}


setInterval(setDate, 1000);
setDate();