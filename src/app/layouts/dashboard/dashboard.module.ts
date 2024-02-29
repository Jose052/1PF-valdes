import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { ListaDeAlumnosModule } from './pages/alumnos/alumnos.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    UsuariosModule,
    ListaDeAlumnosModule,
    CursosModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./pages/usuarios/usuarios.module').then(
            (m) => m.UsuariosModule
          ),
      },
      {
        path: 'alumnos',
        loadChildren: () =>
          import(
            './pages/alumnos/alumnos.module'
          ).then((m) => m.ListaDeAlumnosModule),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
      },
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
