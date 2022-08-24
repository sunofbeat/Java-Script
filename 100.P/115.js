let user = {
    name: 'sunho',
    age: 32,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user)
console.log(json)

//
user = {
    name: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}

console.log(JSON.stringify(user))

let room = {
    number: 23
}

let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup))

room.toJSON = function() {return this.number}
let s = JSON.stringify(meetup)
console.log(s)

//parsing
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "friend": {"name": "scott", "age": 27}}'
let man = JSON.parse(manJson)
console.log(man)