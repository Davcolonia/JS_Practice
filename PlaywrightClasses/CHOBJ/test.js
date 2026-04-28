function retry(testName, maxRetries = 3) { console.log(maxRetries); } retry("login-test");

console.log("A".charCodeAt(0))

let str = " PASS "; console.log(str.trim().toLowerCase());
let str2 = "pass,fail,skip".split(",").length
console.log(str2)
let str3 = "hello"; 
str3[0] = "H"; 
console.log(str3);


console.log("Error: 404 Not Found".match(/\d+/g));


let a = { status: "pass" }; 
let b = a; b.status = "fail"; 
console.log(a.status)