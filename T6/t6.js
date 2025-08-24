'use strict';

const style = `table {
border-collapse: collapse;
margin: 20px 025;}
td {
  padding: 5px 10px;
}`;

document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);

let strnum = prompt('Give a positive number: ');
let number = Number(strnum);
console.log(typeof number);

let table = '<table>multiplication table:';
let multiplication;
for (let i = 1; i <= number; i++) {
  table += '<tr>';
  for (let j = 1; j <= number; j++) {
    multiplication = i * j;
    console.log(`${i} * ${j} = ${multiplication}`);

    table += `<td> ${multiplication}</td>`;
  }
  table += '</tr>';
}

table += '</table>';
document.getElementById('target').innerHTML = table;
