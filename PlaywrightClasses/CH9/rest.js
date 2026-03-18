function logResults(suiteName, ...results){
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(", ")}`);

}
logResults("auth suite", "pass", "fail", "skip")