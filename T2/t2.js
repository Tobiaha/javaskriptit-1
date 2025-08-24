'use strict';
const x1 = +prompt('Give x1:');
const y1 = +prompt('Give y1:');
const x2 = +prompt('Give x2:');
const y2 = +prompt('Give y2:');

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
document.getElementById('target').innerHTML =
  `The distance between the points (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(2)}.`;
