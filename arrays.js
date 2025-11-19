let values = [1,2,3,"four","five",false,[true,"six","seven"],8,9]


console.log(values) //Array(9)
console.log(typeof(values)) //Object 
console.log(Array.isArray(values)) //true


//accessing values
console.log(values[3])
console.log(values[6][1])


//updating values 
let names = ["Bob","Alice",'Joyce']
names[2] = "Jack"
console.log(names)
// ['Bob', 'Alice', 'Jack']


//no of values 
let no_of_names = names.length
console.log(no_of_names)

//adding values at the end
names.push("Anne","Jill")
console.log(names)
// ['Bob', 'Alice', 'Jack', 'Anne', 'Jill']


//adding items at the beginning
names.unshift("Mark","John")
console.log(names)
// ['Mark', 'John', 'Bob', 'Alice', 'Jack', 'Anne', 'Jill']


//removing the last item 
names.pop()
console.log(names)
// ['Mark', 'John', 'Bob', 'Alice', 'Jack', 'Anne']


//remove the first item
names.shift()
console.log(names)
// ['John', 'Bob', 'Alice', 'Jack', 'Anne']


//splice - removing elements
let data = [100,200,"five",false,"Jane"]
data.splice(1,2)
console.log(data)
// [100, false, 'Jane']

//splice - adding elements without deleting
data.splice(1,0,"three","four")
console.log(data)
// [100, 'three', 'four', false, 'Jane']

//splice - replace values
data.splice(2,2,"five",true)
console.log(data)
// [100, 'three', 'five', true, 'Jane']


//slice
console.log(data.slice(2,5))
//  ['five', true, 'Jane']

let numbers = [1,2,3,3,3,4,5]
//indexOf
console.log(numbers.indexOf(3))//2

//lastindexOf
console.log(numbers.lastIndexOf(3))//4

//includes
console.log(numbers.includes(6))//false
console.log(numbers.includes(1))//true

//sort
let x = [100,11,2,3]
x.sort()
console.log(x)
// [100, 11, 2, 3]

//reverse
let y = ["James","John","Jack"]
y.reverse()
console.log(y)
// ['Jack', 'John', 'James']

//join
let shoes=['big','small','medium']
let z = shoes.join('*')
console.log(z)
// big*small*medium

//toString
console.log(shoes.toString())//big,small,medium

//at
console.log(shoes.at(-1))//medium


//copyWithin
let arr = [100,200,300,400,500]
arr.copyWithin(1,2,4)
console.log(arr)
// [100, 300, 400, 400, 500]


//slice - extract a portion of an array to create a new array
let c = [12,13,14,15,16]
console.log(c.slice(1,4))

//spread operator - to copy arrays
let arr1 = [10,20,30]
let arr2 = [...arr1]
console.log(arr2) //[10,20,30]

//spread operator - merge arrays
let i = ["Python","JavaScript"]
let j = ["HTML","CSS"]
let k = [...i,...j,"PHP"]
console.log(k)//['Python', 'JavaScript', 'HTML', 'CSS']

//rest operator
let array = [100,200,300,400,500]
let [a,b,...other_elements] = array
console.log(a)//100
console.log(b)//200
console.log(other_elements)// [300, 400, 500]

