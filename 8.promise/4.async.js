async function f() {
    return 1
}
f().then(console.log) // 1

f = async function() {
    return Promise.resolve(2)
}
f().then(console.log) //2

f = async function() {
    return Promise.reject(new Error(3))
}
f().catch(e => console.log(e.message))

//
f = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })  //await는 일반fn에서 쓸수없음 async에서만!
    let result = await promise //promise가 끝날때까지 기다리겠다.
    console.log(result)
}
//f() //promise가 끝나고 1초후 4

//

class Waiter {
    async wait() {
        return await Promise.resolve('cooked bread.')
    }
}
new Waiter().wait().then(console.log)
