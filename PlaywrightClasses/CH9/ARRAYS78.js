const greet = function (name1){
    return `Hello, ${name1}!`;
}

console.log(greet("Mi"));

const greet2 = (name1) => `Hello, ${name1}!`;
console.log(greet2("wi"));



const doubleIt = n => n*2;
console.log(doubleIt(10))

const getEnv = () => "staging";
console.log(getEnv());
