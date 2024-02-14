import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertsService } from '../../../../core/services/alerts.service';
import { Observable, map, filter } from 'rxjs';
import { Usuario } from './usuarios-model';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private alerts: AlertsService, private http: HttpClient,) { }

  generateString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getUsuarios(){
    return this.http.get('../../../../../../assets/db_test/usuarios.json')
  }

  getUsersBYId(id: number | string){
    return this.http.get<Usuario[]>('../../../../../../assets/db_test/usuarios.json').pipe(
      map((data)=>data.filter(i=>i.id ==id))
    )
  }

  getUser(email: string | null, password: string | null){
    return this.http.get<Usuario[]>('../../../../../../assets/db_test/usuarios.json').pipe(
      map((data)=>data.filter(i=>i.email == email && i.password == password))
    )
  }

  getUserByToken(token: string | null){
    return this.http.get<Usuario[]>('../../../../../../assets/db_test/usuarios.json').pipe(
      map((data)=>data.filter(i=>i.token == token))
    )
  }
}



