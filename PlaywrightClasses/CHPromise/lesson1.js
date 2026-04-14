let apiCall = new Promise(function (resolve, reject){
    resolve({status: 200, body: "User data"});
});

apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log(response.body);
});

let apiCall2 = new Promise(function (resolve, reject){
    reject("500 error");
});

apiCall2.then(function (data){
    console.log("Data is a success!");
}).catch(function (error){
    console.log(error)
});