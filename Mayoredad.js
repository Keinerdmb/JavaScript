const { log } = require("console");
const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Ingrese su edad: ", (edad) => {

    edad = parseInt(edad);

    if (edad >= 18) {
        console.log("Puedes ingresar.");
    } else {
        console.log("Acceso denegado.");
    }
    rl.close();
        
});