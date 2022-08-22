class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

class Rabbit extends Animal {
    hide() {
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')

Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    stop() {
        super.hide()
        this.stop()
    }

    stop() {
        console.log(this.name, this.color, 'stop')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()
