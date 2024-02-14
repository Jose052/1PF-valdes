import { Injectable, Self } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class alumnosService {
  constructor(private http: HttpClient,) { }

  getAlumnos(){
    return this.http.get('../../../../../../assets/db_test/alumnos.json')
  }
}
