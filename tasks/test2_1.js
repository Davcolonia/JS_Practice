function output(results) {
let passed = 0;
let failed = 0;
let skipped = 0;
let totalDuration = 0;
let failedSteps = []
for(const step of results){
    if(step.status === "passed") passed ++;
    else if(step.status === "failed") {
            failed ++
            failedSteps.push(step.name)
    }
    if(step.status === "skipped") skipped ++;
    totalDuration += step.durationMs;
}


  return "total steps: "+results.length+" steps passed: "+passed+" steps failed: "+failed+" steps skipped: "+skipped+" Total Duration: "+totalDuration+"Ms"+" Failed Steps: "+failedSteps;
}
console.log(output(results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]))