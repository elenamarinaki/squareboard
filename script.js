const container = document.querySelector('.container');
const colours = ['#b5e48c', '#99d98c', '#76c893', '#52b69a', '#d9ed92'];
const SQUARES = 200;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColour(square));
  square.addEventListener('mouseout', () => removeColour(square));

  container.appendChild(square);
}

function setColour(elem) {
  const colour = getRandomColour();
  elem.style.background = colour;
  elem.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;
}

function removeColour(elem) {
    elem.style.background = '#100f15';
    elem.style.boxShadow = `2px 2px 2px rgba(214, 213, 208, 0.2)`;
}

function getRandomColour() {
  return colours[Math.floor(Math.random() * colours.length)];
}
