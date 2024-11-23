import { Request, Response } from 'express';
import CursoRepository from '../repositories/CursoRepository';

const cursoRepository = new CursoRepository();

class CursoController {
    async getAllCourses(req: Request, res: Response) {
        const cursos =  await cursoRepository.getCursos();
        console.log(cursos);
        res.json(cursos);
    }
}

export default CursoController;
