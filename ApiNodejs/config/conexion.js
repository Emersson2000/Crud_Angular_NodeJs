const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amarsun098098',
    port: 3306,
    database: 'db_basico'
});

conexion.connect(err => {
    if(err) {
        console.log(`Ha ocurrido un error: ${err}`);
    } else {
        console.log(`Conexión exitosa con la base de datos`);
    }
});

module.exports = conexion;