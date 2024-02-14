import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Usuario } from '../dashboard/pages/usuarios/usuarios-model';
import { UsuariosService } from '../dashboard/pages/usuarios/usuarios.service';

describe('Pruebas de AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;
  let usersServices: UsuariosService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('AuthService debe estar definido', () => {
    expect(authService).toBeTruthy();
  });

  it('Al llamar login() debe establecer un authUser', () => {
    const MOCK_RESPONSE: Usuario[] = [
      {
        id: "03085c5478962064c2802fa5",
        firstName: "Sasuke",
        lastName: "Uchiha",
        email: "sasu@mail.com",
        password: "123456",
        role: "USER",
        token: "ab3d3thdkd1"
    },
    ];
    authService
      .login({ email: 'mock@mail.com', password: 'password' })
      .subscribe({
        next: () => {
          expect(authService.authUser).toEqual(MOCK_RESPONSE[0]);
        },
      });
  });
});