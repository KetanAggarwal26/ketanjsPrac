const accId=143212
let acctEmail='test@gail.com'
var acctPassword='12345';
acctCity='tetsss';

//accId=2; not allowed
acctEmail='etstts@tets.com';
acctPassword='21212';
console.log(accId);
/*
Note: Prefer not to use var because of issue in block and functional scope

*/
console.table([accId,acctEmail,acctPassword,acctCity]);

