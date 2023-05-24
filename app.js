//* Link Index
const colors = ['GREEN', 'RED', 'RGBA(133,122,200)', '#F15025'];

const title = document.querySelector('.color');
const btn = document.querySelector('#btn');

document.body.style.backgroundColor = colors[0];
title.textContent = `${colors[0]}`;

function randomColor() {
  const Tab = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[Tab];
  title.textContent = colors[Tab];
}
btn.addEventListener('click', randomColor);
