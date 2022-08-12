function sayHello(name) {
    let msg = `Hello`
    if(name){
        msg += `, ${name}`
    }
    console.log(msg)
}

sayHello()
sayHello('Mike')
sayHello('Sun')


let msg = 'welcome'

function sayHello(name) {
    let msg = 'Hello'
    console.log(msg + ' ' + name)
}

sayHello('sun')
console.log(msg);


function add(a, b=50) {
    return a + b
}

const result = add(2)
console.log(result)

let div = (a, b) => a / b
console.log(div(4, 8))

