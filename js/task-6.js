function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');


function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;

    fragment.appendChild(box);
  }

  boxes.innerHTML = ''; 
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
