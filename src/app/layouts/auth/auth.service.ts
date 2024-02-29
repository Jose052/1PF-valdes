import { Injectable } from '@angular/core';
import { Usuario } from '../dashboard/pages/usuarios/usuarios-model';
import { Router } from '@angular/router';
import { AlertsService } from '../../core/services/alerts.service';
import { Observable, delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UsuariosService } from '../dashboard/pages/usuarios/usuarios.service';

interface LoginData {
  email: null | string;
  password: null | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser: Usuario | null = null;

  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private loadingService: LoadingService,
    private httpClient: HttpClient,
    private usersServices: UsuariosService
  ) {}

  private setAuthUser(user: Usuario): void {
    this.authUser = user;
    localStorage.setItem('token', user.token);
  }

  login(data: LoginData): Observable<Usuario[]> {
    return this.usersServices.getUser(data.email, data.password)
      .pipe(
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', '']);
          } else {
            this.alertsService.showError('Email o password invalidos');
          }
        })
      );
  }

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    return this.usersServices.getUserByToken(localStorage.getItem('token'))
      .pipe(
        map((response) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.authUser = null;
            localStorage.removeItem('token');
            return false;
          }
        })
      );
  }
}
