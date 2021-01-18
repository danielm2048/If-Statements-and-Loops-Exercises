let num1 = Number(prompt("Insert first number"));
let num2 = Number(prompt("Insert second number"));
let temp;

while (num2 !== 0) {
  temp = num2;
  num2 = num1 % num2;
  num1 = temp;
}

alert(num1);