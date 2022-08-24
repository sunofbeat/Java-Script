new Promise((resolve, reject) => reject(new Error(1)))
    .catch(e => console.log(e.message)) //1

new Promise((resolve, reject) => {throw new Error(2)})
    .catch(e => console.log(e.message)) //2

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message)) // 3

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla())
    .catch(e => console.log(e.message)) //blabla is not defined

new Promise((resolve, reject) => {throw new Error(4)})
    .catch(e => console.log(e.message)) //4
    .then(result => console.log(result)) //undefined

new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {
        if(e instanceof URIError) {
        } else {
            console.log(e.message) //5
            throw e
        }
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    .catch(e => console.log(e.message)) //5
