type Man = {
    name: string
}

const nam: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name: 'neo'}]

//
type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
//color = 'yellow'  //type은 지정해준값만 쓸수 있다.

//
type Employee = Man & {
    job: string
}

const employee: Employee = {
    name: 'berg',
    job: 'proprammer'
}