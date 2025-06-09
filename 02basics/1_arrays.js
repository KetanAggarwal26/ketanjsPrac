//Array

const arryNew=[2,4,10,22,34,50,12,11];
const newArr= new Array(1,4,7,10);


//console.log(arryNew[2])

//Array Method
//arryNew.push(6)
//arryNew.push(7)
//arryNew.pop() // last value remove

//arryNew.unshift(0) // add element in starting
//arryNew.shift(0) //remove starting element
//console.log(arryNew)
console.log(arryNew.includes(2))

//console.log(arryNew.indexOf(19)) // gives -1 if no value in array

const newwArry=arryNew.join() // creates string

//console.log(newwArry)

// slice , splice
console.log(arryNew)
const mynew1=arryNew.slice(1,3)
console.log(mynew1)

const mynew2=arryNew.splice(1,3) // removes elements from existing array and creates new array of those elements it changes the original array
console.log(arryNew)
console.log(mynew2)