class Article {
    static publiser = 'sunhojinyoung'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title 
    }
}

console.log(Article.publiser)

//
Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

let article1 = new Article('java', 100)
let article2 = new Article('JavaScript', 10)

console.log(Article.compare(article1, article2))

console.log(article1 + '')

console.log(Object.keys(Article))
for(let key in Article) console.log(key)