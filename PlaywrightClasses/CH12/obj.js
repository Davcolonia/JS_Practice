const user = {
    name: "dave",
    age: 43
}


const calc = {
    value: 0,
    add(n) {
        this.value += n;
        return this;
    },
    substract(n) {
        this.value -= n;
        return this;
    }
}
const calc2 = {
    value: 0,
    add(n) {
        this.value += n*2;
        return this;
    },
    substract(n) {
        this.value -= n*2;
        return this;
    }
}
console.log(calc.add(5).substract(5));
console.log(calc2.add(5).substract(5));