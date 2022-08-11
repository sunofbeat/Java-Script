function greet() {
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
}

salute()
console.log(salute)

//function이 담길거라 변수를 동사로 한다.
let sayHello = function(user, greeting) {
    //back tick을 이용한 리터럴을template literal
    return `${greeting}, ${user}` 
}

console.log(sayHello('rebecca', 'hello'))

//과제: HI라고 인사하는 function을 정의하고, 실행하라.
const sayHi = function() {
    console.log('Hi')
}
const say = sayHi
say()

//
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

//
(function() {
    console.log('earth')
})()

//
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)

let showMsg = function(from, msg='no message') {
    console.log(`${from - msg}: ${msg}`)
}
showMsg(3, 1)
showMsg('trinty')