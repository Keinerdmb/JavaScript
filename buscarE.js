const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let frutas = ['manzana', 'mango', 'pera'];

function buscar() {
    rl.question('Ingresa el nombre de la fruta: ', (respuesta) => {
        let fruta = respuesta.toLowerCase();

        if (frutas.includes(fruta)){
            console.log(`La fruta ${fruta} está en la lista`);
        } else {
            console.log(`La fruta ${fruta} no se encuentra registrada`);

            rl.close();
        }
    });
}

buscar();