function output(results) {
let passed = 0;
let failed = 0;
let skipped = 0;
let totalDuration = 0;
let failedSteps = []
for(const step of results){
    if(step.status === "passed") passed ++;
    if(step.status === "failed") {
            failed ++
            failed.push(step.name)
    }
    if(step.status === "skipped") skipped ++;
    totalDuration += step.durationMs;
}


  return "total steps: "+results.length+" steps passed: "+passed+" steps failed: "+failed+" steps skipped: "+skipped+" Total Duration: "+totalDuration+"Ms"+" Failed Steps: "+failedSteps;
}