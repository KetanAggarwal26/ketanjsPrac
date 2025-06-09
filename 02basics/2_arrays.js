const arryNewCount=['ten','twenty','thirty'];
const arryNewNumbers=['forty','fifty','sixty'];

//arryNewCount.push(arryNewNumbers) // add array to array shallow copy

//

const arryNewNumbersconcat=arryNewCount.concat(arryNewNumbers) // // new array with combining two and creates a deep copy
//console.log(arryNewCount) 
//console.log(arryNewNumbersconcat) 

const allNewNumbersSpread=[...arryNewCount,...arryNewNumbers] // just like concat but we we can combine more then two arrays into one 
//console.log(arryNewCount) 
//console.log(allNewNumbersSpread)

const arryNewToFlat=[2,4,10,22,34,[50,12,11],[20,21,23,[91,90]]];
const arryNewFlat=arryNewToFlat.flat(0) // we can give how much flat we want to do from array of array like 0,1,infinity etc
//console.log(arryNewFlat) 

console.log(Array.from('ketan')) 
console.log(Array.from({name:'ketan'})) 

let score=200
let score2=300
let score3=400
console.log(Array.of(score,score2,score3)) 