'use strict';

const celsius = +prompt('Give a temperature in Celsius:');

const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.getElementById('target').innerHTML = `<p> Celsius ${celsius}°C</p>
 <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>;
`;
