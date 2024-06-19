let timers = [null, null, null, null];
let times = [0, 0, 0, 0];
let isRunning = [false, false, false, false];

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}

function updateDisplay(timerId) {
    document.getElementById(`display${timerId}`).textContent = formatTime(times[timerId - 1]);
}

function toggleTimer(timerId) {
    const button = document.querySelector(`#timer${timerId} .play-pause i`);
    if (isRunning[timerId - 1]) {
        clearInterval(timers[timerId - 1]);
        button.classList.remove('fa-pause');
        button.classList.add('fa-play');
    } else {
        timers[timerId - 1] = setInterval(() => {
            times[timerId - 1] += 1000;
            updateDisplay(timerId);
        }, 1000);
        button.classList.remove('fa-play');
        button.classList.add('fa-pause');
    }
    isRunning[timerId - 1] = !isRunning[timerId - 1];
}

function lapTime(timerId) {
    let lapTime = formatTime(times[timerId - 1]);
    let lapDiv = document.createElement("div");
    lapDiv.textContent = lapTime;
    document.getElementById(`laps${timerId}`).appendChild(lapDiv);
}

function restartTimer(timerId) {
    clearInterval(timers[timerId - 1]);
    times[timerId - 1] = 0;
    isRunning[timerId - 1] = false;
    updateDisplay(timerId);
    document.getElementById(`laps${timerId}`).innerHTML = "";
    const button = document.querySelector(`#timer${timerId} .play-pause i`);
    button.classList.remove('fa-pause');
    button.classList.add('fa-play');
}

