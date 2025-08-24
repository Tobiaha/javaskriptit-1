'use strict';
const luku = +prompt('Give a positive number:');

let summa = 0;

for (let i = luku; i > 0; i--) {
  summa += i;
  console.log(i);
}

document.querySelector('#target').innerText =
  ` if you count down to zero from ${luku} the sum of all the numbers is ${summa} `;
