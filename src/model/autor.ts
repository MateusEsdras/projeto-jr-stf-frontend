import { ObraDTO } from './obra.dto';

export interface Autor {
    id: string,
    cpf: string,
    nome: string,
    sexo: string,
    email: string,
    senha: string,
    paisOrigem: string,
    nascimento: string,

    obras: ObraDTO[]
}