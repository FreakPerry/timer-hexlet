const input = document.getElementById('time-input');
const addButton = document.getElementById('add-timer');
const itemList = document.getElementById('timers');

function createTimer(duration) {
  let timer = duration;

  const listItem = document.createElement('li');
  const timerDisplay = document.createElement('span');
  const deleteButton = document.createElement('button');

  timerDisplay.textContent = `${timer} сек.`;
  deleteButton.textContent = 'удалить';

  listItem.appendChild(timerDisplay);
  listItem.appendChild(deleteButton);
  itemList.appendChild(listItem);

  const interval = setInterval(() => {
    timer -= 1;
    if (timer < 0) {
      clearInterval(interval);
      listItem.remove();
    } else {
      timerDisplay.textContent = `${timer} сек.`;
    }
  }, 1000);

  deleteButton.addEventListener('click', () => {
    clearInterval(interval);
    listItem.remove();
  });
}

addButton.addEventListener('click', () => {
  const time = parseInt(input.value, 10);

  if (!isNaN(time) && time > 0) {
    createTimer(time);
    input.value = '';
  } else {
    alert('Введите число больше нуля!');
    input.value = '';
  }
});
