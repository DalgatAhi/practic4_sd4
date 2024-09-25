/// Задание 1
function printEvenNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      if (i % 2 === 0) {
        alert(i);  // выводим четные числа через alert
      }
    }
  }
  
  let a = +prompt("Введите a: ");
  let b = +prompt("Введите b: ");
  printEvenNumbers(a, b);
////////////////////

/// Задание 2
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
////////////////////

/// Задание 3
let number;
do {
  number = prompt("Введите число, большее 10:", 0);
} while (number <= 10 && number !== null);
////////////////////

/// Задание 4
function min(a, b) {
    return a < b ? a : b;
  }
let a = +prompt("Введите первое число: ");
let b = +prompt("Введите второе число: ");

alert("Меньшее число: " + min(a, b));
////////////////////

/// Задание 5
const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
  };
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
////////////////////

/// Задание 6
const checkAge = age => age > 18 || confirm('Родители разрешили?');
////////////////////



  
