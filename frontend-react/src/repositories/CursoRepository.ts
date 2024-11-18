import { Curso } from '../entities/Curso';
import cursos from '../data/cursos.json';

class CursoRepository {
    private cursos: Curso[] = cursos;
     subscribers: (() => void)[] = [];

    subscribe(callback: () => void): void {
        this.subscribers.push(callback);
    }

    private notifySubscribers(): void {
        this.subscribers.forEach(callback => {
            callback();
        });
    }

    getAll(): Curso[] {
        return this.cursos;
    }

    getById(codigo: string): Curso | undefined {
        return this.cursos.find(curso => curso.codigo === codigo);
    }

    create(curso: Curso): void {
        this.cursos.push(curso);
        this.notifySubscribers();
    }

    update(curso: Curso): void {
        const index = this.cursos.findIndex(c => c.codigo === curso.codigo);
        if (index !== -1) {
            this.cursos[index] = curso;
            this.notifySubscribers();
        }
    }

    delete(codigo: string): void {
        const index = this.cursos.findIndex(curso => curso.codigo === codigo);
        if (index !== -1) {
            this.cursos.splice(index, 1);
            this.notifySubscribers();
        }
    }
}   

// Crear una instancia global
const cursoRepository = new CursoRepository();
(window as any).cursoRepository = cursoRepository; 
export default cursoRepository;