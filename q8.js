let count = 0;
let i = 1;

while (count < 5) {
  if (isHappy(i)) {
    console.log(i);
    count++;
  }
  i++;
}

function isHappy(num) {
  let seen = {};
  let sum = 0;
  while (num > 1 && !seen[num]) {
    sum = 0;
    seen[num] = num;
    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num === 1;
}