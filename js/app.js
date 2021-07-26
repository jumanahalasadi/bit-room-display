const APP = (function () {
    document.addEventListener('DOMContentLoaded', init);
})();


function init () {
    // Set initial values
    updateTime();
    updateStatus();

    // Update every minute
    setInterval(updateTime, 1000*60);
    setInterval(updateStatus, 1000*60);
}

function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const today = new Date() + " ";
    const dateBreak = today.split(" ");
    dateElement.innerHTML = `${dateBreak[0]}, ${dateBreak[1]} ${dateBreak[2]}` ;

    let time = dateBreak[4].split(":");
    time.pop();
    let meridiemTime = time[0] >= 12 && (time[0]-12 || 12) + ':' + time[1] + ' PM' || (Number(time[0]) || 12) + ':' + time[1] + ' AM';
    timeElement.innerHTML = meridiemTime;
}

function updateStatus() {
    const statusElement = document.getElementById('status');
    const statusMessageElement = document.getElementById('status-message');

    statusElement.innerHTML = "Occupied"

    statusMessageElement.innerHTML = "Next class in 25 minutes";
}