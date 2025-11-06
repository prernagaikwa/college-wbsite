//global
// global.a = 'This is a global variable';
// console.log(a);  

//console
// console.log("This is a log message");
// console.error("This is an error message");

//peocess
// console.log("Process ID:", process.pid);
// console.log("Node.js Version:", process.version);


//timeout and interval
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

setInterval(() => {
    console.log("This runs every 3 seconds");
}, 3000);