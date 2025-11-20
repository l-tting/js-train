//display numbers from 1 to 20
for(i=1; i<=20; i++){
    console.log(i)
}

//looping through an array
const fruits = ["apple","banana","orange","peach","pineapple","passion"]//6-1
for(i=0; i<fruits.length;i++){
    console.log(fruits[i])
}

//skip an element with every iteration
for (i=0;i<fruits.length;i+=2){
    console.log(fruits[i])
}

//looping backwards - display numbers 1 to 10 in descending order
for(i=10;i>0;i--){
    console.log(i)
}

//looping backwards -display array items in the reverse order
for( i=(fruits.length-1) ;i>=0; i--){
    console.log(fruits[i])
}

let reversed = []
for( i=(fruits.length-1) ;i>=0; i--){
    reversed.push(fruits[i])
}
console.log(reversed)// ['passion', 'pineapple', 'peach', 'orange', 'banana', 'apple']

//dsiplay 1 - 10 using while
num = 1
while(num <= 10){
    console.log(num)
    num++
}



