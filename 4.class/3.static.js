class Article {
    static publiser = 'ddanzi'

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

//
let article1 = new Article('java', 100)
let article2 = new Article('Javascript', 10)

console.log(Article.compare(article1, article2))

console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publiser, article1.address, article1.compare)
console.log(Article.title, Article.viewCnt)
console.log(Object.keys(article1))

//keys는 static method는 불러올수 없다 (compare를 불러올수 없다.)
console.log(Object.keys(Article)) //['publiser', 'address', 'getPrice']
for(let key in Article) console.log(key)
/*
publiser
address
getPrice
*/

console.log(Object.keys(Article)) //(3) ['publiser', 'address', 'getPrice']
console.log(Article.prototype)
//{constructor: ƒ, toString: ƒ, valueOf: ƒ, Symbol(Symbol.toPrimitive): ƒ}
console.log(Object.keys(article1)) //(2) ['title', 'viewCnt']


//

let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare)
console.log(articles)

Article.compare = (a, b) => b - a
articles.sort(Article.compare)
console.log(articles)