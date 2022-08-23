let arr = new Array(1, 'hello', true, {age: 32}, function fn(){}, class A{})
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

let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop());

//
let group = {
    title: 'art',
    students: ['sunho', 'jinyoung', 'jin'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title, ':', studentName))
    }
}

group.list()

//array -> string
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting)

console.log(arr.join(''))
