import { Curso } from '../../entities/Curso';
import './Curso.css';

interface TarjetaCursoProps {
    curso: Curso;
}

export const TarjetaCurso: React.FC<TarjetaCursoProps> = ({ curso }) => {
    return (
        <div className="curso-card">
            {"ddd"}
            <h3>{curso.nombre}</h3>
            <div className="curso-details">
                <p><strong>Código:</strong> {curso.codigo}</p>
                <p><strong>Nivel:</strong> {curso.nivel}</p>
                <p><strong>Horas Cátedra:</strong> {curso.horasCatedra}</p>
                <p><strong>Horas Laboratorio:</strong> {curso.horasLaboratorio}</p>
                <p><strong>Cupos:</strong> {curso.cantidadDeEstudiantes}</p>
                <p><strong>Curso General:</strong> {curso.esCursoGeneral ? 'Sí' : 'No'}</p>
                <p><strong>Atemporal:</strong> {curso.esAtemporal ? 'Sí' : 'No'}</p>
            </div>
        </div>
    );
}; 