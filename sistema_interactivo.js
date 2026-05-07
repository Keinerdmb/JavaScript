const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Select the operation (+, -, *, /): ', (operation) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let resultado;

            if (operation ==="+") {
                resultado = num1 + num2;
            } else if (operation === "-") {
                resultado = num1 - num2;
            } else if (operation === "*") {
                resultado = num1 * num2;
            } else if (operation === "/") {
                if (num2 === 0) {
                    console.log("0 is a number no valid.");
                    rl.close();
                    return
                }
                resultado = num1 / num2;
            } else {
                console.log("No valid.");
                rl.close();
                return;
            }
            
            console.log("Result: ", resultado)
            rl.close();
        })    
    })
})


