function calculate(operator) {
    var num1 = parseInt(prompt("첫번째 숫자는?"));
    var num2 = parseInt(prompt("두번째 숫자는?"));
    var result = 0;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }

    alert("두 수의 계산 결과는: " + result + "입니다");
}