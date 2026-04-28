function logResults(suiteName, ...results){
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(", ")}`);

}
logResults("auth suite", "pass", "fail", "skip")

function add(a,b,c){
    return a+b+c;
}

let nums = [1,2,3];
add(...nums);
