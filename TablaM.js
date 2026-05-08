const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

rl.question('Ingrese un número: ', (numero) => {

    numero = Number(numero);

    console.log(`Tabla del ${numero}`);

    for (let i=1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    rl.close();
    
});
