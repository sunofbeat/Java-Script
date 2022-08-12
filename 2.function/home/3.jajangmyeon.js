/* 과제:
2.callback.js 의 짜장면 이야기를, => function 으로 refactoring하라
*/

let chef1 = food =>  `달콤한 ${food}.\n`

let chef2 = food => `매운 ${food}.\n`

//parameter가 두개이상이면 괄호를 써줌
                //chef parameter를 작성해주지않으면 default값이 chef1이다.
let waiter = (food, chef=chef1) => chef(food)

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef1),
            waiter('짬뽕', chef2),
            waiter('볶음밥'))