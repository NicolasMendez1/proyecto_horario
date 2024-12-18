const oracledb = require('oracledb');

const config = {
    user: 'SYSTEM',
    password: 'admin2024',
    connectString: 'response-arena.gl.at.ply.gg:2049/xepdb1'
};

async function connectToOracle() {
    try {
        const connection = await oracledb.getConnection(config);
        console.log('Conexión exitosa a la base de datos Oracle 21c');
        
        let result = await connection.execute(
            'SELECT * FROM GH_CURSO'  
         );

        console.log(result.rows);

        connection.close();
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}

connectToOracle();
