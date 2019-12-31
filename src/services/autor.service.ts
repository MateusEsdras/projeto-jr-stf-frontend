import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from 'src/model/autor';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';

@Injectable()
export class AutorService {

    constructor(private http: HttpClient){}

    insert(autor: Autor) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/autor`,
            autor,
            {observe: "response", responseType: "text"}
        );
    }

    find(id: number): Observable<Autor> {
        return this.http.get<Autor>(`${API_CONFIG.baseUrl}/autor/${id}`);
    }

    findAll(): Observable<Autor[]> {
        return this.http.get<Autor[]>(`${API_CONFIG.baseUrl}/autor/all`);
    }

    update(autor: Autor, id: number){
        return  this.http.put(
            `${API_CONFIG.baseUrl}/autor/${id}`,
            autor,
            {observe: "response", responseType: "text"}
        );
    }

    addObra(idAutor: number, idObra: number) {
        return  this.http.put(`${API_CONFIG.baseUrl}/autor/add/${idAutor}/${idObra}`, null);
    }

    removeObra(idAutor: number, idObra: number) {
        return  this.http.put(`${API_CONFIG.baseUrl}/autor/remove/${idAutor}/${idObra}`, null);
    }

    delete(id: number) {
        return  this.http.delete(`${API_CONFIG.baseUrl}/autor/${id}`);
    }
}