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

function Food(name) {
    this.name = name
}

function Chef1() {
    this.cook = foodName => new Food(`달콤한 ${foodName}`)
}

function Chef2() {
    this.cook = foodName => new Food(`매운 ${foodName}`)
}

function Waiter() {
    this.serving = food => console.log(food)
}

const chef1 = new Chef1()
const chef2 = new Chef2()
const waiter = new Waiter()

waiter.serving(chef1.cook('짜장면'))
waiter.serving(chef2.cook('짜장면'))
