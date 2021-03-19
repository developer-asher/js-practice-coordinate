'use strict';

function init() {
  const target = document.querySelector('.target');
  const vertical = document.querySelector('.vertical');
  const horizontal = document.querySelector('.horizontal');
  const coordinate = document.querySelector('.txt_coordinate');
  const targetRect = target.getBoundingClientRect();
  const rectHalfWidth = targetRect.width / 2;
  const reactHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    target.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    vertical.style.transform = `translate(${x}px, 0)`;
    horizontal.style.transform = `translate(0, ${y}px)`;
    coordinate.style.transform = `translate(${x - rectHalfWidth}px, ${y - reactHalfHeight}px)`;
    coordinate.innerText = `${x}px, ${y}px`;
  });
}

init();
