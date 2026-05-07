const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese valor de la compra: ', (respuesta) => {
    let compra = parseFloat(respuesta);
    let total = compra;

    if (compra > 100000) {
        let descuento = compra * 0.10;
        total = compra - descuento;

        console.log(`Se aplicó un descuento de: ${descuento}`);
        
    }

    console.log(`Valor final a pagar: ${total}`);

    rl.console
})