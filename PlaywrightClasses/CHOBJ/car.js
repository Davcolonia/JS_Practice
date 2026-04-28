class Car{


constructor(name){
    this.name = name;
}

drive() {
    console.log("Drive car" + this.name);
}

printDetails() {
    console.log("Details of the car" + this.name);
}

}

let tesla = new Car("model3");
tesla.drive();