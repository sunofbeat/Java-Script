/* 과제:
~를 객체지향으로 refactoring하라.
*/


function Chef(name){
    this.name = name
    this.cook = food
}

function Food(name) {
    this.name = name
}      

function Waiter(Food){
    this.serving = food => new Food(food)
}


const food = new Food()
const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')
const waiter = new Waiter

console.log(waiter.serving(chef1.cook('짜장면')))
 