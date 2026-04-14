// let p = new Promise(function (resolve, reject){
//     resolve(42);
// })

// p.then(function (value){
//     console.log("Answer:", value);
// })

// let p = new Promise(function (resolve, reject){
//     reject("something broke");
// })

// p.catch(function (err){
//     console.log("Caught:", err)
// })
let p = Promise.resolve(5);

p.then(function (val){
    return val * 10;
}).then(function(val){
    console.log("Result:", val);
});

