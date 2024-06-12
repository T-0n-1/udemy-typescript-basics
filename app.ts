function add(number1: number, number2: number) {
  return number1 + number2;
}

function printResult(result: number): void {
  console.log("Result: " + result);
}

function addAndHandle(
  n1: number,
  n2: number,
  callback: (number: number) => void
) {
  const result = n1 + n2;
  callback(result);
}

printResult(add(57, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
