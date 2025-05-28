const stingOne='Name'

//string interpolation
console.log(`Hello my name is ${stingOne}`);


const stingTwo= new String('addssdfdsdf')
console.log(stingTwo[0]);
console.log(stingTwo.__proto__);

console.log(stingTwo.charAt(1));
console.log(stingTwo.indexOf('d'));

const substingTwo= stingTwo.substring(0,4)
console.log(substingTwo);

const slicestingTwo= stingTwo.slice(-10,2)
console.log(slicestingTwo);
