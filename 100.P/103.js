let user1 = {
    name: 'sunho',
    greet() {
        console.log(`I am ${this.name}`)
    }
}

let user2 = {
    name: 'jinyoung',
    age: 10,
    greet() {
        console.log(`I am ${this.name}`)
    }
}

user1.greet()
user2.greet()

//
let name = 'morpheus'

function greet() {
    console.log(`I am ${this.name}.`)
}
    
greet()
greet.call(user1)
greet.call(user2)


user2 = {
    name: 'nyang',
    age: 10
}
console.log(user2)
user1.greet.call(user2)