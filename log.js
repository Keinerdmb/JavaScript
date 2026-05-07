const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese usuario: ', (usuario) => {
    rl.question('Ingrese contraseña: ', (contrasena) => {

        if (usuario === 'admin' && contrasena === '1234') {
            console.log('Acceso correcto');
        } else {
            console.log('Credenciales incorrectas');
        }

        rl.close();
    });
});