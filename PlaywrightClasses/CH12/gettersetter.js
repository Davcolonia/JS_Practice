const user = { 
firstName: "Jay", 
lastName: "kay",
get fullName(){
return this.firstName + this.lastName;
},
set fullName(value){
 [this.firstName, this.lastName]= value.split(" ");
}
};

console.log(user.fullName);
user.fullName ="Amrit Dash";
console.log(user.fullName)