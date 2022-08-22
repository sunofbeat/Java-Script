class CoffeeMachine {
    waterAmount

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeeMachine)
/*
class CoffeeMachine {
    waterAmount

    constructor(voltage) {
        this.voltage = voltage
    }
}
*/
console.log(Object.keys(CoffeeMachine)) // []
console.log(CoffeeMachine.prototype) //{constructor: ƒ}

let machine = new CoffeeMachine(220)
console.log(machine) // CoffeeMachine {waterAmount: undefined, voltage: 220}

machine.waterAmount = 1
machine.voltage = 110
console.log(machine)

//
CoffeeMachine = class {
    _waterAmount

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype) //{constructor: ƒ, waterAmount: <accessor>}

machine = new CoffeeMachine()
console.log(machine) //CoffeeMachine {_waterAmount: undefined, voltage: undefined}

machine.waterAmount = 1 //set waterAmount
console.log(machine)
console.log(machine.waterAmount) //get waterAmount

machine._waterAmount = 11
console.log(machine._waterAmount) // 11