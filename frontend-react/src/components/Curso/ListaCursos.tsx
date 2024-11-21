import { useState, useEffect } from 'react';
import { Curso } from '../../entities/Curso';
import cursoRepository from '../../repositories/CursoRepository';
import { TarjetaCurso } from './TarjetaCurso';

export const ListaCursos = () => {
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarCursos();
    }, []);

    useEffect(() => {
        cursoRepository.subscribe(cargarCursos);
    }, []);

    const cargarCursos = () => {
        try {
            const cursosData = cursoRepository.getAll();
            setCursos([...cursosData]);
        } catch (error) {
            console.error('Error al cargar los cursos:', error);
        } finally {
            setLoading(false);
        }
    };

    const agregarCurso = () => {
        cursoRepository.create({
            codigo: '123456',
            nombre: 'Curso de Prueba',
            nivel: 1,
            horasCatedra: 10,
            horasLaboratorio: 10,
            cantidadDeEstudiantes: 10,
            esCursoGeneral: false,
            esAtemporal: false
        });        
    }   

    if (loading) {
        return <div>Cargando cursos...</div>;
    }

    return (
        <div >
            <h2 >Cursos Disponibles</h2>
            <button onClick={agregarCurso}>Agregar Curso</button>
            <div className="flex flex-col gap-4">
                {cursos.map((curso) => (
                    <TarjetaCurso key={curso.codigo} curso={curso} />
                ))}
            </div>
        </div>
    );
}; 