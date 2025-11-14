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