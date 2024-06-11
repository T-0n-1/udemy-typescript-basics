function add(number1: number, number2: number) {
  return number1 + number2;
}

function printResult(result: number): void {
  console.log("Result: " + result);
}

printResult(add(57, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
