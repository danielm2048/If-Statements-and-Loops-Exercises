let max = -Infinity;
let temp;

for (let i = 1; i <= 5; i++) {
  temp = Number(prompt(`Insert the ${i} number`));
  if (temp > max) {
    max = temp;
  }
}

alert(max);