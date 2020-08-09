const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStartRef: document.querySelector('button[data-action="start"]'),
  btnStopRef: document.querySelector('button[data-action="stop"]'),
};

let intervalId = null;
let isActive = false;

refs.btnStartRef.addEventListener('click', startChangeColors);
refs.btnStopRef.addEventListener('click', stopChangeColors);

function startChangeColors() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    setRandomColor();
  }, 1000);
}

function stopChangeColors() {
  isActive = false;
  clearInterval(intervalId);
}

const setRandomColor = () => {
  const color = colors[randomIntegerFromInterval(0, 5)];
  document.body.style.backgroundColor = color;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
