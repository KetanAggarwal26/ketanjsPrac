const newObj={}

newObj.id='123abcc'
newObj.name='ket'
newObj.age=23

//console.log(newObj)

const newObjNew={
    name: 'Ketan',
    email: 'test@test.com',
    fullInfo:{
        username:{
            firstname:'Ketan',
            lastname:'aggarwal'
        }
    }
}
//console.log(Object.keys(newObjNew))
//console.log(Object.values(newObjNew))
//console.log(newObjNew.hasOwnProperty('esas'))

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

//const obj3=Object.assign(obj1,obj2)
//const obj4=Object.assign({},obj1,obj2) //{} --> ensure that target objct is empty and other needs to be combined to empty
const obj4={...obj1,...obj2}
//console.log(obj1)

const objDestructor={
    name:'Ketan',
    jobdesignation:'devloper'
}

const {jobdesignation : desig} =objDestructor

//console.log(desig)
console.log(desig)

