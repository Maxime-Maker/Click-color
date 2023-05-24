const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const title = document.querySelector('.color');
const btn = document.querySelector('#btn');
document.body.style.backgroundColor = '#f1f5f8';
title.textContent = '#f1f5f8';

function randomColor() {
  let newTab = ['#'];
  for (let i = 0; i < 6; i++) {
    newTab.push(hex[Math.floor(Math.random() * hex.length)]);
  }

  newTab = newTab.join('');
  document.body.style.backgroundColor = newTab;
  title.textContent = newTab;
}
btn.addEventListener('click', randomColor);
