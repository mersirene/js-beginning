//alert('Hello World!');
//document.write('Hello JS');
//console.log('Hello JS');
let productTitle = 'Mazda RX-8';
let productPrice = 40000 +20;
let isAvailable = true;

document.write(productTitle);
document.write('<br>');
document.write(productPrice);
document.write('<br>');
document.write(isAvailable);
document.write('New price');
document.write('<br>');
productPrice = productPrice * 0.9;
document.write('<br>');
document.write(productPrice)

let productColor;

let obj = {}

let sym = Symbol();

const userName = prompt('Enter your name');
console.log('Hello, ' + userName);

const userAge = prompt('Enter your age');
console.log('Your age is ' + userAge);
const newAge = userAge + 1;
console.log('Next year you will be ' + newAge);

const someResult = addThree(10, 20, 30);
console.log(someResult);

function addThree(a, b, c) {
    return a + b+c;
}