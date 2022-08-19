/*과제
class로 refactoring하라
*/

class Food {
    constructor(taste, name){
        this.taste = taste
        this.name = name
    }

    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.name}`
    }
}

class Chef {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    }
}

class Waiter {
   order = (foodName, chef) => chef.cook(foodName)
}
/*
class Waiter {
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}
*/

let chef1 = new Chef('매운')
let chef2 = new Chef('달콤한')
let waiter = new Waiter()


waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)

console.log(waiter.order('짬뽕', chef1) + '')
console.log(`${waiter.order('짬뽕', chef2)}`)

/*과제
매운 짬뽕 이 출력되게 하라
*/