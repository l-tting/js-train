let person = {
    "name":"Alice",
    "age":40,
    "address":"123 Long St",
    "is_married":true,
    "tech stack":["Python","JS","Go"]

}

console.log(person)
console.log(typeof(person))

console.log(person.name) //Alice
console.log(person.age) //40
console.log(person["tech stack"]) //['Python', 'JS', 'Go']


console.log(Object.keys(person))
// ['name', 'age', 'address', 'is_married', 'tech stack']
console.log(Object.values(person))
// ['Alice', 40, '123 Long St', true, Array(3)]
console.log(Object.entries(person))
//  [Array(2), Array(2), Array(2), Array(2), Array(2)]


let city = {
    "name":"Nairobi",
    "code": 47,
    "sub-counties":{
        "sub1":"Dagoretti",
        "sub2":"Westlands",
        "sub3":"Embakasi",
        "sub-3":{
            "towns":["Parklands","Kilimani"]
        }
    }
}
console.log(city["sub-counties"]?.["sub-3"]?.towns[1])
//objects.js:38 Uncaught TypeError: Cannot read properties of undefined (reading 'sub-3')