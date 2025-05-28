let score='33'

// console.log(typeof(score));

let valueInNumber=Number(score)

// console.log(typeof(valueInNumber));


//"12" easily convert
//'12abx' NaN
//true 1 false=>0

let isLoggedIn='33'

// console.log(typeof(isLoggedIn));

let booleanisLoggedIn=Boolean(isLoggedIn)

//"12" true
//'' false
// 1=>true 0=>false

let someNumber=33

// console.log(typeof(someNumber));

let stringsomeNumber=String(someNumber)

// console.log(typeof(stringsomeNumber));

//33 string
//'' null
// true string

// ******Operations*********
let value=3
let negvalue=-value
// console.log(negvalue);

// console.log('1' + 2);
// console.log(1 + '2');
// console.log(1 + '2');
// console.log('1' + 2 +2);
// console.log(1 + 2 + '2');


// **********Memory*****************

//Stack(Primitive) means copy , heap(Non-primitive) reference of original value if we change one value it will change original as well

let origValue='tets';
let copyvalue=origValue;

origValue='namememme';

// console.log(origValue);
// console.log(copyvalue);

let userone={
    email:'tetsts@gmail.com',
    upi:'wi@oksbi.com'
}

let userTwo=userone;
console.log(userone.email);
console.log(userTwo.email);

userTwo.email='akak2@kka.com'

 console.log(userone.email);
console.log(userTwo.email);


