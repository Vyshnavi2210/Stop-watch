let timerInterval;
let elapsedTime = 0;

const timerElement = document.querySelector('.timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(ms) {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60)) % 60;
  const hours = Math.floor(ms / (1000 * 60 * 60));
  return ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};
}

function startTimer() {
  const startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerElement.textContent = formatTime(elapsedTime);
  }, 100);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerElement.textContent = formatTime(elapsedTime);
  startButton.disabled = false;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);