//Reusable Step Runner with Callback
//Write a higher-order function `runStep(stepName, actionFn)` that logs the start of a step, executes the callback, and returns an object in the format `{ stepName, passed, message }`. If the callback throws an error, catch it and return `passed: false` with the error message.

function runStep(stepName, actionFn){

    const result = actionFn();

return{
    StepName: stepName,
    passed: true,
    message: result ?? "Step completed successfully"
};



}