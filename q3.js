let num1 = Number(prompt("Insert first number"));
let num2 = Number(prompt("Insert second number"));
let num3 = Number(prompt("Insert third number"));


// Basic solution
if (num1 > num2) {
  if (num1 > num3) {
    if (num2 > num3) {
      alert(`${num1}, ${num2}, ${num3}`);
    }
    else {
      alert(`${num1}, ${num3}, ${num2}`);
    }
  }
  else {
    alert(`${num3}, ${num1}, ${num2}`);
  }
}
else {
  if (num2 > num3) {
    if (num1 > num3) {
      alert(`${num2}, ${num1}, ${num3}`);
    }
    else {
      alert(`${num2}, ${num3}, ${num1}`);
    }
  }
  else {
    alert(`${num3}, ${num2}, ${num1}`);
  }
}

// //Another solution
if (num2 > num1) {
  [num1, num2] = [num2, num1];
}

if (num3 > num1) {
  [num1, num3] = [num3, num1];
}

if (num3 > num2) {
  [num2, num3] = [num3, num2];
}

alert(`${num1}, ${num2}, ${num3}`);