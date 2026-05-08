const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

function cajero() {
    console.log('\nBienvenido al cajero.');
    console.log('\n1. Consultar saldo.');
    console.log('2. Retirar dinero.')
    console.log('3. Salir.');

    rl.question('Por favor seleccione una opción: ', (opcion) => {
        switch(opcion) {
            case '1':
                console.log(`Su saldo es de ${saldo}`);
                cajero();
                break;
            
            case '2':
                rl.question('¿Cuanto desea retirar?: ', (retiro) => {
                    retiro = parseInt(retiro)
                    if (isNaN(retiro) || retiro <= 0){
                        console.log('Ingrese una cantidad valida.');
                    } else if (retiro > saldo) {
                        console.log('Saldo insuficiente.');
                    } else {
                        saldo -= retiro
                        console.log('Retiro realizado correctamente.')
                    }
                    cajero();
                });
                break;

            case '3':
                console.log('Adios');
                rl.close();
                break;

            default:
                console.log('Opción no valida.');
                cajero();
                break;
        }           

    });
}

cajero();