console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}

const getStatus = (code) => code >= 200 ? "ok" : "error";

console.log(getStatus(200));

function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();


function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);

//why
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
console.log([1, 2, 3].map(double).map(addOne));


function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());
