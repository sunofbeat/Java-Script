let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user)
//call과 bind의 차이점:call은 앞에있는 주어function을 콜한다.
//bind는 주어 function을 복제한 새로운값을 리턴
fn()

setTimeout(fn, 100)

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

//과제: user.greet을 할당하라. greet의 this엔 user가 담겨있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)