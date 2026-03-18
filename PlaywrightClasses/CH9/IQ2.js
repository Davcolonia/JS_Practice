function check(name, status, duration){
    return `${name}: ${status} (${duration}ms)`;
}
console.log(check("process2", "good", 100));