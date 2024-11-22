import Seccion from "../../Horario/Seccion";
import { useState, useEffect } from 'react';

import cursoRepository from '../../../repositories/CursoRepository';


export default function ListadoCursos() {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarCursos();
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
        <ul className="space-y-2">
            {cursos.map((curso, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow ">
                    <h3 className="font-bold">{curso.nombre}</h3>
                    <p>Código: {curso.codigo}</p>
                    <p>Nivel: {curso.nivel}</p>
                    <p>Horas Cátedra: {curso.horasCatedra}</p>
                </li>
            ))}
        </ul>
    );
    /*
    return (
        <ul className="space-y-2">
            {cursos.map((curso , index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow">
                    <Seccion seccion={curso} />
                </li>
            ))}
        </ul>
    );
    */
}


