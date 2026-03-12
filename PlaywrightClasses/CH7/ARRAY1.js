let arr = [1,3,4,2];
console.log(arr)
arr.splice(2,1);

console.log(arr)
// arr.splice(0,99,1)
// console.log(arr)
arr.splice(2,0,99)
console.log(arr)
arr.splice(1,2,10,20)
console.log(arr)


let nums = [10,1,3,2,21,2];
nums.sort()
console.log(nums);
nums.sort((a,b) => a-b);
console.log(nums);
nums.sort((a,b) => b-a);
console.log(nums);


let suite1 = [{ name: "login", status: "pass" }];
// let suite2 = [...suite1];
let suite2 = Array.from(suite1);
suite2[0].status = "fail";
console.log(suite1[0].status);
