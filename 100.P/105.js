function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()

class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, ' run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, ' stop')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)
animal.run(100)
console.log(animal)
animal.stop()
console.log(animal)