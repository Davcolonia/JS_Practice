let config = {browser: "firefox", timeout: 4000};

config.browser = "Firefox";
config.timeout= 5000;
config.retries = 2;
console.log(config);

config = {browser: "safari"};
console.log(config);

//--------------------------------------------

const object = {a:1,b:2,c:3,d:4};
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));

const user = {name: "John", age: 30};


for (const key in user){
    console.log(`${key}: ${user[key]}`);
}

Object.keys(user).forEach(key => {
    console.log(key);
});

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

