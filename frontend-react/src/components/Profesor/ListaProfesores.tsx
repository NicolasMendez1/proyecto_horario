import { useState, useEffect } from 'react';
import { Profesor } from '../../entities/Profesor';
import profesorRepository from '../../repositories/ProfesorRepository';
import { TarjetaProfesor } from './TarjetaProfesor';
import './Profesor.css';

export const ListaProfesores = () => {
    const [profesores, setProfesores] = useState<Profesor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarProfesores();
    }, []);

    useEffect(() => {
        profesorRepository.subscribe(cargarProfesores);
    }, []);

    const cargarProfesores = () => {
        try {
            const profesoresData = profesorRepository.getAll();
            setProfesores([...profesoresData]);
        } catch (error) {
            console.error('Error al cargar los profesores:', error);
        } finally {
            setLoading(false);
        }
    };

    const agregarProfesor = () => {
        profesorRepository.create({
            codigo: Math.floor(Math.random() * 10000),
            nombre: 'Nombre',
            apellidoPaterno: 'Apellido Paterno',
            apellidoMaterno: 'Apellido Materno',
            esFullTime: true
        });
    }

    if (loading) {
        return <div>Cargando profesores...</div>;
    }

    return (
        <div className="profesores-container">
            <h2>Profesores Disponibles</h2>
            <button onClick={agregarProfesor}>Agregar Profesor</button>
            <div className="profesores-grid">
                {profesores.map((profesor) => (
                    <TarjetaProfesor key={profesor.codigo} profesor={profesor} />
                ))}
            </div>
        </div>
    );
}; 