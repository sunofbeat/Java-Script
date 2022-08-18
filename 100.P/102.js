function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)
console.log(sayHi.length)

let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

//
sayHi = function() {
    let count = 10
    console.log('hi')
    sayHi.count++
}

sayHi()
console.log(`call count: ${sayHi.count}`)

sayHi.count = 0
sayHi()
sayHi()
sayHi()
sayHi()
console.log(`call count: ${sayHi.count}`)

let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2)

let user2 = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.name : this.age
    }
}

let user3 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user2}`)
console.log(user2 < user3)
console.log(user2 + 10)
console.log(user3 + 10)

//
user2 = {
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '')

user2.valueOf = function() {
    return this.age
}
console.log(user2 + 10)

//
userStr = JSON.stringify(user2)
console.log(userStr)
console.log(typeof userStr)