//singleton - Apni trha ka ek object constructor wala
//Object.create()

const mySym=Symbol('mySym1')
// object literals
const userOne={
    name:'Ketan',
    age: 18,
    [mySym]: 'myTest21',
    location: 'Chandigarh',
    isLoggedIn : false,
    lastLoggedInDays:[
        'Mon','Tue'
    ]
}
// console.log(userOne['name']) 
// console.log(userOne.name) 
// console.log(userOne[mySym]) 

userOne.name='Ketan Agg'
//Object.freeze(userOne) // will not change values of object won't even give any error if you try to change
userOne.name='Ketan Aggarwal'
// console.log(userOne) 

userOne.getGreetings1= function(){
console.log('Hello userOne');
}

userOne.getGreetings2= function(){
console.log(`Hello userOne ${this.name}`)
}

console.log(userOne.getGreetings1())
console.log(userOne.getGreetings2())
    
