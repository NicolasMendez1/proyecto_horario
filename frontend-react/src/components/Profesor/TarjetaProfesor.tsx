import { Profesor } from '../../entities/Profesor';
import './Profesor.css';

interface TarjetaProfesorProps {
    profesor: Profesor;
}

export const TarjetaProfesor: React.FC<TarjetaProfesorProps> = ({ profesor }) => {
    return (
        <div className="profesor-card">
            <h3>{profesor.nombre} {profesor.apellidoPaterno} {profesor.apellidoMaterno}</h3>
            <div className="profesor-details">
                <p><strong>Código:</strong> {profesor.codigo}</p>
                <p><strong>Nombre:</strong> {profesor.nombre}</p>
                <p><strong>Apellido Paterno:</strong> {profesor.apellidoPaterno}</p>
                <p><strong>Apellido Materno:</strong> {profesor.apellidoMaterno}</p>
                <p><strong>Tipo:</strong> {profesor.esFullTime ? 'Tiempo Completo' : 'Tiempo Parcial'}</p>
            </div>
        </div>
    );
}; 