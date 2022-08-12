/*과제:
1.calculate.js를 callback으로 refactoring하라
-, *, /연산을 callback으로 처리한다.
*/

/*
let op1 = function(num1, num2) {
    return num1 - num2
}


let op2 = function(num1, num2) {
    return num1 * num2
}

let op3 = function(num1, num2) {
    return num1 / num2
}

let calculate = function(num1, num2, op='*') {
    let result

    switch(op) {
        case '-': result = op1(num1, num2); break
        case '*': result = op2(num1, num2); break
        case '/': result = op3(num1, num2)
    }
    return result
}

console.log(calculate('2', '3', '/'),
            calculate('2', '3', '-'),
            calculate('2', '3'));
*/

function minus(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function calculate(a, b, op=multiply) {
    return op(a, b)
}

console.log(calculate(1, 2, minus),
            calculate(1, 2, multiply),
            calculate(1, 2, divide),
            calculate(1, 2))