let scores = [45, 50, 60, 79, 90];

//map - transforms every element, returns new array
let grades = scores.map(s => s > 70 ? "Pass": "Fail");

//filter - keeps elements that pass a test

let passing = scores.filter(s => s >= 70);
console.log(passing);

//reduce - accumulate to a single value
let total = scores.reduce((sum, s) => sum +s, 0);
console.log(total);

//flat - flattens nested array

let nested = [[1,2], [3,4], [5]];
console.log(nested.flat);





