class CoffeeMachine {
    #waterAmount

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine)
console.log(CoffeeMachine.prototype) //{constructor: ƒ, waterAmount: <accessor>}

let machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount) //102

//machine.#waterAmount = 1 //Uncaught SyntaxError

