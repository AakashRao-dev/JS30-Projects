'use strict';

const themeContainer = document.querySelector('.theme__container');

let toggleThemeEl = '';

for (let i = 0; i < 3; i++) {
  toggleThemeEl += `
    <div class="theme__input">
      <div class="toggle">
        <div class="indicator"></div>
      </div>
    </div>
`;
}

themeContainer.innerHTML += toggleThemeEl;

const toggle = document.querySelectorAll('.toggle');

toggle.forEach(toggle => {
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
  });
});
