import express from 'express';
import CursoController from '../controllers/CursoController';

const cursoRouter = express.Router();
const cursoController = new CursoController();

cursoRouter.get('/', async (req, res) => {
    const cursos = await cursoController.getAllCourses(req, res);
    console.log(cursos);
    console.log(cursos);
    console.log(cursos);
    console.log(cursos);
    res.json(cursos);
});

export default cursoRouter;
