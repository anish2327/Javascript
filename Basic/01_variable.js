const accountId= 20230027
let accountGmail= "anishgirigmail"
var accountPassword= "12345"
accountCity= "Delhi"

// accountId= 22
accountGmail= "neerajgmail"
accountPassword= "45678"
accountCity= "ballia"
let accountState;

/*
prefer not to use var 
beacuse of issue in block scope and function scope

*/

console.log(accountId);
console.log([accountGmail,accountPassword,accountCity]);
console.table([accountGmail,accountPassword,accountCity,accountState]);


