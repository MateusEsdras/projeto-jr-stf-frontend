import { AutorDTO } from './autor.dto';

export interface Obra {
    id: string,
    nome: string,
    descricao: string,
    exposicao: string,
    publicacao: string,

    autores: AutorDTO[]
}