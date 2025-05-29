let myDate=new Date();
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

let myCreatedDate =new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myCreatedLocaleDate =new Date(2023,1,23,5,3)
console.log(myCreatedLocaleDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

let myDateNew=new Date();

let myDateNewLocale=myDateNew.toLocaleDateString('default',{
    weekday:"long",
    day:"numeric"
})
console.log(myDateNewLocale)

