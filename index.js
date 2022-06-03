console.log("working....");
// What is a Temporal Dead Zone?
// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
// A block is a pair of braces ({...}) used to group multiple statements.
// Initialization occurs when you assign an initial value to a variable.
// console.log(x);
//     var x = 6;
//     console.log(x);

// What is the for-in loop in JavaScript? Give its syntax    
// The for loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times. Its syntax is:
// for(initialization; condition; increment) {
//     // Code to be executed
// }

// What is difference between null and undefined and where to use what?
// undefined

// It means a variable declared, but no value has been assigned a value.
// var demo;
// alert(demo); //shows undefined
// alert(typeof demo); //shows undefined

// null

// Whereas, null in JavaScript is an assignment value. You can assign it to a variable.
// var demo = null;
// alert(demo); //shows null
// alert(typeof demo); //shows object


// what is Symbol?
// ymbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.

// Write code to explain map and filter in arrays
// map() method: It applies a given function on all the elements of the array and returns the updated array. It is the simpler and shorter code instead of a loop. 
// arr = new Array(1, 2, 3, 6, 5, 4);
// for(int i = 0; i < 6; i++) {
//     arr[i] *= 3;
// }

// filter() method: It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition.
// arr = new Array(1, 2, 3, 6, 5, 4);
// new_arr = {}
// for(int i = 0; i < 6; i++) {
//     if(arr[i] % 2 == 0) {
//          new_arr.push(arr[i]);           
//     }
// }

// Please explain Self Invoking Function and its code
// A self-invoking expression is invoked (started) automatically, without being called.
// (function (parameters) {
//     //body of the function
// })(arguments);
