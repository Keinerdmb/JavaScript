const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;

function pedirNumero() {
    rl.question('Ingrese un número (0 para terminar): ', (dato) => {
        let numero = Number(dato);

        if (numero === 0) {
            console.log(`La suma total es: ${suma}`);
            rl.close();
        } else {
            suma += numero;
            pedirNumero();
        }

    });
}

pedirNumero();