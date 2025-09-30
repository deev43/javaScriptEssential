console.log("Please identify your role:")
let person = prompt();
let accessLevel;

switch(person) {
    case "Employee" :
        accessLevel = "You are authorized to have access to Dietary Services";
        break;
    case "Enrolled Member" :
        accessLevel = "You are authorized to have access to Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber" :
        accessLevel = "You are authorized to have partial access to facilitate Dietary Services only";
        break;
    case "Non-Subscriber" :
        accessLevel = "You  need to enroll or at least subscribe first to avail this facility";
        break;        
}

console.log(accessLevel);