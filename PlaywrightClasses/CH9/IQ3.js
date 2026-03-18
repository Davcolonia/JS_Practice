
function getStatus(code){
    if(code >= 200 && code <= 300) return "success";
    if(code >= 400 && code <= 500) return "client error";
    if(code >= 500) return "server error";
}

console.log(getStatus(200));


function logtest(name){
    console.log(`Running ${name}`);

}

let result = logtest("login");
console.log(result);

console.log("test")