import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient,) { }

  getCursos(){
    return this.http.get('../../../../../../assets/db_test/cursos.json')
  }
}
