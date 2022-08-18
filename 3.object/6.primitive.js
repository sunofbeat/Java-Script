let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2) //86,400.000(하루)

let user = {
    name: 'amanda',
    age: 20,
    //Symbol을 사용할땐 []를 써줌
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.name : this.age
    } 
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`)
console.log(user > user2)//false
console.log(user + 50) 
console.log(user2 + 50)

//
user = {
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '')

user.valueOf = function() {
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user)
console.log(userStr)
console.log(typeof userStr)