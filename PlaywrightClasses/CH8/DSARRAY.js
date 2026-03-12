// let [first,second,third] = [10,20,30];

// console.log(first);
// console.log(second);
// console.log(third);

let [first,second,...third] = [10,20,30,40,50];

console.log(first);
console.log(second);
console.log(third);


let original = [1,3,4];
let copy = Array.from(original);
copy.push(99)
console.log(original.length);
console.log(copy);
console.log(original);



