let obj = {}

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

//
obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) //null

console.log(obj.toString())

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)

//모든생성자의 prototype들은 Objecttype을 부모 prototype으로 사용하고있음

console.log(arr2.toString()) // [1, 2]

//
let one = new Number(1)
console.log(one.toString()) // Number (1)

//
function User() {}
let user = new User()
console.log(user.toString())//[object Object]
console.log(obj.toString())//[object Object]