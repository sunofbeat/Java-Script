let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3 

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal //rabbit has an animal
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = {
    __proto__: animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.name) //user

administrator.name = 'jonadan'
console.log(administrator.name) //jonadan

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat()
console.log(lion.name)

console.log(Object.keys(rabbit))

//rabbit의 key를 반복출력
for(let key in rabbit) {
    console.log(key)
}

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)

    if(isOwn) {
        msg = (`child's key: ${key}`)
    }else {
        msg = (`parent's key: ${key}`)
    }
    console.log(msg)
}
