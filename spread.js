// const arr = [10,20,30,40,50]

// let [a,b,c,d,e] = arr
// let reversed = [e,d,c,b,a]
// console.log(reversed) //[50, 40, 30, 20, 10]


const arr2 = [1,2,3,4,5,6,7,8]

let [a,b,c,d,...other_elements] = arr2

let parts = [
    [a,b],
    [c,d],
    other_elements
]
console.log(parts) // [Array(2), Array(2), Array(4)]


let x 
let y = x ?? "Value missing in x"
console.log(y) //undefined
