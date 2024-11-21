import Seccion from "../../Horario/Seccion";
const cursos = [
    { codigo_curso: "INF-113", curso: "Introduccion a la Computación 1", sala: "Sala 1-108", profesor: "Hugo Araya" },
    { codigo_curso: "INF-114", curso: "Programación 1", sala: "Sala 1-145", profesor: "Pedro Perez" },
    { codigo_curso: "INF-115", curso: "Base de Datos 1", sala: "Sala 1-150", profesor: "Juan Perez" }
];

export default function ListadoCursos() {

    return (
        <>
            {
                cursos.map((curso, index) => (
                    <Seccion seccion={curso} />
                ))
            }
        </>
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


