function add(number1: number, number2: number, printResult: boolean) {
  return number1 + number2;
}

const number1 = "5";
const number2 = 2.8;
const printResult = true;

const result = add(+number1, +number2, printResult);
console.log(result);
