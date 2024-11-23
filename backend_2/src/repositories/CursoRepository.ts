import { DbConnection } from './dbConnection';

export default class CursoRepository {
    async getCursos() {
        try {
            const rows = await DbConnection.executeQuery('SELECT * FROM GH_CURSO ');
            return rows.map((row: any) => this.mapRowToJson(row));
        } catch (error) {
            console.error('Error al consultar cursos:', error);
            throw error;
        }
    }

    private mapRowToJson(row: any): any {
        return {
            codigo: row.CODIGO,
            nombre: row.NOMBRE,
            horasCatedra: row.HORAS_CATEDRA
        };
    }
}


 /*  
async getCursoById(id: number) {
    try {
        const rows = await DbConnection.executeQuery('SELECT * FROM GH_CURSO WHERE ID = :id', [id]);
        return rows.length > 0 ? this.mapRowToJson(rows[0]) : null;
    } catch (error) {
        console.error('Error al consultar curso por ID:', error);
        throw error;
    }
}
    */