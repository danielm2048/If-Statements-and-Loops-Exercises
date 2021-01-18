let sum = 0;
let temp = 0;

for (let i = 100; i <= 999; i++) {
  temp = i;
  sum = 0;
  for(let j = 0; j < 3; j++) {
    sum += Math.pow(temp % 10, 3);
    temp = Math.floor(temp / 10);
  }
  if (sum === i) {
    console.log(i);
  }
}