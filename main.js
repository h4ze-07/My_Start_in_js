let userName = prompt('What is your name?');
alert(`"Hello ${userName}"! How are you?`);


//SIMPLE CALCULATOR
let numberOne = Number(prompt('Введіть перше число: '));
let numberTwo = Number(prompt('Введіть друге число: '));
let action = prompt("Оберіть дію: '+', '-', '*', '/'")

if (action === '+') {
    alert(`Результат складання: ${numberOne + numberTwo}`);
} else if (action === '-') {
    alert(`Результат віднімання: ${numberOne - numberTwo}`);
} else if (action === '*') {
    alert(`Результат множення: ${numberOne * numberTwo}`);
} else if (action === '/') {
    if (numberOne || numberTwo === 0) {
        alert('Ділити на нуль нельзя! Оберіть будь-ласка інші числа');
    } else {
        alert(`Результат ділення: ${numberOne / numberTwo}`);
    }
}


//COMPARISON OF TWO NUMBERS
let a = Number(prompt('Введіть перше число: '));
let b = Number(prompt('Введіть друге число: '));

let result = (a === b) ? alert('true') : alert('false');


//AVERAGE
let c = Number(prompt('Введіть перше число: '));
let d = Number(prompt('Введіть друге число: '));
let e = Number(prompt('Введіть третє число: '));

alert(`Середнє арифметичне трьох чисел: ${(c + d + e)/3}`);


//DECOMPOSITION
let number = Number(prompt("Введіть п'ятизначне число: "));
alert(`${number %= number}`);