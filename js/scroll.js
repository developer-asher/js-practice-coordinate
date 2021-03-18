'use strict';

function init() {
  const findButton = document.querySelector('.btn_find');
  const rabbit = document.querySelector('.rabbit>img');

  findButton.addEventListener('click', () => {
    // method 1.
    rabbit.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // method 2.
    // const rect = rabbit.getBoundingClientRect();
    // const x = rect.top;
    // const y = rect.left;

    // window.scroll({ top: `${x}`, left: `${y}`, behavior: 'smooth' });
  });
}

init();
