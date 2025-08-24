'use strict';
// && || ! three sides of triangle
const a = +prompt('Give side a:');
const b = +prompt('Give side b:');
const c = +prompt('Give side c:');

let triangle = document.getElementById('target');

if (a === b && b === c) {
  triangle.innerHTML = '<p>The triangle is equilateral.</p>';
} else if (a === b || b === c || a === c) {
  triangle.innerHTML = '<p>The triangle is isosceles.</p>';
} else if (a !== b && b !== c && a !== c) {
  triangle.innerHTML = '<p>The triangle is scalene.</p>';
}
