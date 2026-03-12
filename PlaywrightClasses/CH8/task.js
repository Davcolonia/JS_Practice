let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc,r) => {
    acc[r] = (acc[r] || 0 ) + 1;
    return acc;
}, {});
console.log(counts.pass);

//recieve array of api status codes
//check if all responses are successfull
//find the first non-success code
//return all unique codes

let array = [200,300,404,404,500,500, 600,400,209];

let r2 = array.every(s => s >= 200 && s<=299);
console.log(r2);

let r3 = array.find(s => s < 200 || s> 299);
console.log(r3);

let r4 = [...new Set(array)];
console.log(r4);


let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);


