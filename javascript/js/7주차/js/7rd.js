var num1 = parseInt(prompt("첫번째 숫자는?"));\
var num2 = parseInt(prompt("두번째 숫자는?"));
var result = addNumbers(num1, num2);
alert("두 수의 합은: " + result + "입니다");

function addNumbers(a, b) {
    var sum = a + b;
    return sum;
}
