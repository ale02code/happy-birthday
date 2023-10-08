"use strict"

const container = document.querySelector('.container')
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", function () {
  if (input.value != '') {
    function effect() {
      const name = input.value;
      container.style.fontSize = '10', 'px';
      container.innerHTML = `<h2>Happy Birthday ${name} 🎈</h2>`;
    }

    effect()  
  }
})