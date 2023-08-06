function add(num1, num2) {
  // kono karore jodi number ta string er vitore diye dei tahle seti k handle kora kothin hoye Poer ,,, ata k handle korar jnno ata user kora jete pare
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter a number!";
  }
  return num1 + num2;
}
const result = add(12, 56);
// console.log(result)

// debugger
function multiply(number1, number2) {
  return number1 * number2;
}
const output = multiply(16 + 4, 4);
// console.log(output);
const nayok = ["bangla bhia", "english bhai", "tamil bhai", "china bhai"];
for (const nayoks of nayok) {
  // console.log(nayoks)
}
let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + i;
}
console.log(sum);

const myString = "sushil";
myString[2] = "a";
console.log(myString.length);
const student = {
  name: "sushil",
  age: 17,
};
console.log(delete student.age);
console.log(student);

    let myArray = [1, 2, 3, 4, 5];
    let newValue = 6;
    myArray[myArray.length - 1] = 6;
    console.log(myArray);
