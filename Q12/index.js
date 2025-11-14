let usernames = [];
function signup(userName) {
    if (usernames.includes(userName)) {
        return "User Already Registered, please login.";
    } else {
        usernames[usernames.length] = userName; 
        return "Signup successful, please login.";
    }
}
console.log(signup("hema"));
console.log(signup("ram"));
console.log(signup("hema"));
//creating  new branch login
 usernames = ["hema", "ram"];
let passwords = ["123", "456"];

function login(userName, password) {
    let index = usernames.indexOf(userName);

    if (index === -1) {
        return "User Not Found, please signup.";
    }

    if (passwords[index] === password) {
        return "login successful.";
    } else {
        return "Wrong password: Emp@123";
    }
}
console.log(login("hema", "123"));  
console.log(login("ram", "999"));   
console.log(login("john", "111"));