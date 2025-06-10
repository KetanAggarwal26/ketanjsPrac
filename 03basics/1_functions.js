function myName(){
    console.log('test')
}

//myName()

function addNum(number1,number2){ //definition mai parameters
    console.log(number1+number2)
}

//addNum(1,2) // call ke time arguments

// function usernameFun(username){

//     return `${username} logged in`
// }

// const retnrn2= usernameFun('ketan')
// console.log(retnrn2)

// function usernameFun2(username){
// if(!username){ // same as username===undefined
//     return 'Please enter value'
// }
//     return `${username} logged in`
// }

// const retnrn4= usernameFun2()
// console.log(retnrn4)

// function usernameFun3(username='ket'){ // if the parameter is undefined itt akes this default value else it ovverwrite
// if(!username){ // same as username===undefined
//     return 'Please enter value'
// }
//     return `${username} logged in`
// }
// const retnrn5= usernameFun3()
// console.log(retnrn5)

// function usernameFun3Spread(...num){ 
 
//    return num
//  }

// const newSpread=usernameFun3Spread(200,400,600)
// console.log(newSpread)

// function usernameFun4Spread(val1,val2,...num){ // ist two params as diff and num as different
 
//    return num
//  }

// const newSpread=usernameFun4Spread(200,400,600,800,899)
// console.log(newSpread)

function objectFun(anyobject){ 
 
    console.log(`My name is ${anyobject.name}`)
   
 }

const objNew={
    name:'ket test',
    email:'test2@gmail.com',
    phone:'9212034563'
}
objectFun(objNew)