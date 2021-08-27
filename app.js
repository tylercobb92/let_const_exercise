//var PI = 3.14;
//PI = 42; // stop me from doing this!

const PI = 3.14;
//PI = 42; => "Uncaught TypeError: invalid assingment to const 'PI'" 
console.log(PI);




// What is the difference between var and let?
// Var allows you to reassign and redeclare the variable, but let only allows reassignment. Var variables can also be hoisted.

// What is the difference between var and const?
// Var allows you to reassign and redeclare the variable, const does not allow either. 

// What is the difference between let and const?
// Let variables can be reassigned, while const variables can't be reassigned. 

// What is hoisting?
// Variables declared by var are read first when the code is run (hoisted to the top). If these variables are called by code before they are defined they will be recognized as declared, but the value will be undefined until the code is read up to the point where the variable was assigned a value/values.
