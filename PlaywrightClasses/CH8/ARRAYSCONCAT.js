let arr1 = [1,2,3,4,5];

let a = [1,2];
let b = [2,3];

let c = a.concat(b, [5,6]);
console.log(c);

let d = [...a, ...b];
console.log(d);

console.log(["pass", "fail", "skip"].join("-"));



let result = Array.isArray([1,2,3]);

console.log(result);

//every
let r = [80,90,85].every(s => s => 70);
let r2 = [80,90,85].every(s => s < 70);
console.log(r);
console.log(r2);

//some
let s = [80,90,85].some(s => s < 70);
let s2 = [80,60,85].some(s => s < 70);
console.log(s);
console.log(s2);

