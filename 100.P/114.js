let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(name, surname)

let user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, value] of entries) {
    console.log(key, value)
}

let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin);

[one, two, ...rest] = [1, 2, 3, 4]
console.log(one, two, rest);

[name, surname='sunho'] = ['jin']
console.log(name, surname)

let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width)

let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'dount'],
    extra: true
}

