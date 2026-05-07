const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];

function pedirNota(numero) {
    rl.question(`Ingrese la nota ${numero}: `, (respuesta) => {
        notas.push(parseFloat(respuesta));

        if (numero < 3) {
            pedirNota(numero + 1);
        } else {
            calcularPromedio();
        }
    });
}

function calcularPromedio() {
    const promedio = (notas[0] + notas[1] + notas[2]) / 3;

    console.log(`\nPromedio: ${promedio.toFixed(2)}`);

    if (promedio >= 3.0) {
        console.log("Aprueba");
    } else {
        console.log("Reprueba");    
    }
    
    rl.close();
    
}

pedirNota(1);
