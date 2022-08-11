if(true){} //true이면 실행
if(false){} else {} //false이면 실행하고 아니면 else실행

if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

if(-1) {console.log('!')}

//삼항연산자
console.log(true ? 1: 0)

let val

switch('boo') {
    case 'bar': val = 'bar'; break
    case 'baz': val = 'baz'
    default: val = 'all right'
}
 console.log(val)