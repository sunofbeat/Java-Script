//sayHi() //ReferenceError: Cannot access 'name' before initialization

let name = 'neo'
sayHi()

function sayHi() { // function declaration
    console.log('Hi', name)
}

sayHi()
//
//sayHello() //ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function() { //function expression
    console.log('Hello,', name)
}

sayHello()