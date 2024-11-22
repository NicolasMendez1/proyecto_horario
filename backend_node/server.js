const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const dbConfig = {
    user: 'SYSTEM',
    password: 'admin2024',
    connectString: 'response-arena.gl.at.ply.gg:2049/xepdb1'
};

// Ruta para obtener todos los cursos
app.get('/api/cursos', async (req, res) => {
    let connection;
    
    try {
        // Establecer conexión
        connection = await oracledb.getConnection(dbConfig);
        
        // Ejecutar consulta
        const result = await connection.execute(
            'SELECT * FROM GH_CURSO',
            [], // parámetros vacíos
            { outFormat: oracledb.OUT_FORMAT_OBJECT } // Formato de salida como objeto
        );

        // Enviar respuesta
        res.json(result.rows
        );

    } catch (error) {
        console.error('Error al obtener los cursos:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener los cursos',
            error: error.message
        });
    } finally {
        if (connection) {
            try {
                // Cerrar la conexión
                await connection.close();
            } catch (error) {
                console.error('Error al cerrar la conexión:', error);
            }
        }
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
}); 