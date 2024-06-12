function add(number1, number2) {
    return number1 + number2;
}
function printResult(result) {
    console.log("Result: " + result);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResult(add(57, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
