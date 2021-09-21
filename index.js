const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let intervalId = null;
let isActive = false;

startBtn.addEventListener('click', setColorChangeInterval);
stopBtn.addEventListener('click', stopColorChange);

function setColorChangeInterval() {
    if (isActive) {
        return;
    }
    intervalId = setInterval(setBodyBgColor, 1000);
    isActive = true;
}

function setBodyBgColor(color) {
    document.body.style.backgroundColor = createRandomColor(colors);
    startBtn.disabled = true;
}

function createRandomColor (colors) {
    for (let i = 0; i < colors.length; i += 1){
     return  colors[randomIntegerFromInterval(0, colors.length)]
    }
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopColorChange() {
    clearInterval(intervalId);
    isActive = false;
    startBtn.disabled = false;
}





// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.