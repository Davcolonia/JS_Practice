function maxRetries(max){
let attempts = 0;


return function tryAgain(testName){
    attempts++;
if (attempts > max){
return `${testName} exceeded max retires ${max}`
} 
return `Attempt ${attempts}/${max} for ${testName}`};


return tryAgain;
}

let retry = maxRetries(3);
console.log(retry("login"));



function rateLimiter(limit){
let call = 0


return function tries(tries){
    call++;
    return call <= limit
}
return tries;


}

let limiter = maxRetries(3);

