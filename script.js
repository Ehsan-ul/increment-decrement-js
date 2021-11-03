let number1 = 0;
let number2 = 0;

const btn1 = document.querySelector('.btn1');
const display1 = document.getElementById('display1');

const btn2 = document.querySelector('.btn2');
const display2 = document.getElementById('display2');

btn1.addEventListener('click', () => {
  number1++;
  display1.textContent = number1;
});

btn2.addEventListener('click', () => {
  number2--;
  display2.innerText = number2;
});
