/* 과제:
~를 객체지향으로 refactoring하라.

/*
function Food(name) {
    this.name = name
}

function Chef1(){
    this.cook = food => console.log(`매운 ${food}`)
}

function Chef2(){
    this.cook = food => console.log('달콤한')
}

function Waiter(food, chef){
    this.food = food
    this.chef = chef
    this.serving = (food, chef) => chef(food)
}

const food = new Food('짜장면')
const chef1 = new Chef1()
const chef2 = new Chef2()
const waiter = new Waiter()

waiter.serving(food.name, chef1.cook)
 */

function Food(taste, name) {
    this.taste = taste
    this.name = name
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
