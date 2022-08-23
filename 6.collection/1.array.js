let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[1])

console.log(arr.length)

//
let matrix = [
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop()) //후입선출 LiFo
console.log(arr)

//
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) //선입선출 FiFo
console.log(arr)

//
a = [0, 1, 2]
//return을함
b = a.slice(1) //slice(x) x index부터 /x포함
console.log(b, a)

//
arr = [0, 7, 8, 5]
//return이 없음
arr.splice(1, 2, 1, 2, 3, 4) //splice(제거할, 값, 채울, 값)
console.log(arr)

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b')) //b포함 잘라내기
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s)
//과제: s가 arr인지, 확인하라
console.log(arr == s)

arr = [8, 11, 22, 34, 9]
console.log(arr.sort()) //sort는 배열을 string으로 취급하고있음

console.log(arr.sort((a, b) => a - b)) //오름차순
console.log(arr.sort((a, b) => b - a)) //내림차순

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

for(let key in arr) {
    console.log(key) //index를 return
}

//과제: 원소를 출력하라.
for(let key in arr) {
    console.log(arr[key]) 
}

for(let val of arr) { //of
    console.log(val)
}

//
function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase() //원소들을 대문자로 전환함
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(arr)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) //주어배열을 다시 리턴
console.log(arr, arr2)

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
             console.log(this.title, ':', studentName))
    }
}

group.list()

//배열을 -> string으로
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting)
console.log(typeof greeting)

console.log(arr.join('/')) //token간의 구분자를 넣을수있음
//과제: join()에서 'helloworld2'를 return하라.

console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()
console.log(str, '/', typeof str)

//
str = JSON.stringify(arr)
console.log(str, '/', typeof str)

