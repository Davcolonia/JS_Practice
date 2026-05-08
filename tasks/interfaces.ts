interface User { 
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    locale?: string;
}


interface specialUser extends User
{
    usernameDemo1?: string;
    userDemo2?: string;
    UserDemo3?: string;
}

interface extraSpecialUser extends User
{
    userPII: string;
}



let user1: User = {
    id: 1,
    name: "test User",
    email: "testUser@gmail.com",
    isActive: true,
    locale: "emea"
}

let user2: specialUser = {
    id: 2,
    name: "test2",
    email: "test2@gmail.com",
    isActive: false,
    UserDemo3: "problemUser"
}

Object.entries(user1).forEach(([key, value]) =>{
    console.log(key, value);
})

    Object.entries(user2).forEach(([key, value]) =>{
    console.log(key, value);
})




export let defaultUser: extraSpecialUser = {
  id: 2,
  name: "test3",
  email: "t@gmail.com",
  isActive: false,
  userPII: "some pii value"
};

 
class DefaultUser implements extraSpecialUser {
    locale?: string;
    constructor(
    public id: number,
    public name: string,
    public email: string,
    public isActive: boolean,
    public userPII: string,
    locale?: string
  ) {
    if (locale !== undefined){
    this.locale = locale;
    }
  }
}

const implementedUser: extraSpecialUser = new DefaultUser(
  1,
  "David",
  "david@gmail.com",
  true,
  "SSN-1234",
  "NA"
);

console.log(implementedUser);