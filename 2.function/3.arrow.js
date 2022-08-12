let add = function(a, b) {
    return a + b
}

add = (a, b) => a + b
console.log(add(1, 2))

const double = n => 2 * n
console.log(double(2))

const greet = () => console.log('hello')
greet()

//블럭을 쓰면 return을 해줘야함
add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1, 2))

multiply = (a, b) => a * b
console.log(multiply(3, 9))

