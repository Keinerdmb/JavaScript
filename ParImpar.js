const { log } = require("console");
const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.question("Enter a number: ", (number) => {

    number = parseInt(number);

    if (number % 2 === 0) {
        console.log("Number par");
    } else {
        console.log("Number impar");
        
    }

    rl.close();
})