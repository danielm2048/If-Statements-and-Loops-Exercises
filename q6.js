const david = 80;
const vinoth = 77;
const divya = 88;
const ishitha = 95;
const thomas = 68;
const avg = (david + vinoth + divya + ishitha + thomas) / 5;
console.log("The average score is: " + avg);

switch (true) {
  case avg < 60:
    console.log("The average grade is: F");
    break;
  case avg < 70:
    console.log("The average grade is: D");
    break;
  case avg < 80:
    console.log("The average grade is: C");
    break;
  case avg < 90:
    console.log("The average grade is: B");
    break;
  default:
    console.log("The average grade is: A");
    break;
}