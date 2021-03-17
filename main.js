'use strict';

function init() {
  const target = document.querySelector('.target');
  const vertical = document.querySelector('.vertical');
  const horizontal = document.querySelector('.horizontal');
  const coordinate = document.querySelector('.txt_coordinate');

  document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    coordinate.style.left = `${x + 15}px`;
    coordinate.style.top = `${y + 15}px`;
    coordinate.innerText = `${x}px, ${y}px`;
  });
}

init();
