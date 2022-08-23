let map = new Map()
map.set('1', 'hello')
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))

map = new Map()
map.set(1, 'sunho').set(2, 'jin')
console.log(map)

//
let greens = new Map([
    ['apple', 1200],
    ['berry', 2000],
    ['melon', 1000]
])

for(let entry of greens){
    console.log(entry)
}

let keys = greens.keys()
console.log(keys)

let values = greens.values()
console.log(values)
for(let value of values) {
    console.log(value)
}

let user = {
    name: 'aiden',
    age: 30
}

let entries = Object.entries(user)
console.log(entries)
console.log(new Map(entries))

map = new Map()
map.set('apple', 1).set('orange', 2).set('pear', 3)

fruits = Object.fromEntries(map)
console.log(fruits)