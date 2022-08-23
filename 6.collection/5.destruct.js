let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(name, surname)

let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four);

[one, , three] = [1, 2, 3, 4]
console.log(one, three)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c) // i  a //s에 할당된 문자열중 띄어쓰기까지 값

//
i = s.split(' ') //''간의 간격만큼 분리됨
console.log(i);

[a, b] = i
console.log(a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ')
console.log(user)

user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, value] of entries) {
    console.log(key, value)
}

//
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map) {
    console.log(key, val)
}

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin);

//
[one, two, ...rest] = [1, 2, 3, 4]
console.log(one, two, rest);

//
[name, surname='annonymous'] = ['john']
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width);

({title, height, width} = options)

let {width: w, height: h} = options
console.log(w, h)

let {title: t, ...other} = options
console.log(t, other)

let {title: subject, wide=1000} = options
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

//과제: bread에서 size와 items를 뽑아내라.

let {size, items} = bread
console.log(size, items)

//쪼개서 뽑아내기
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items: [item1, item2]}) {
    console.log(name, item1, item2)
}

showMenu(menu)
