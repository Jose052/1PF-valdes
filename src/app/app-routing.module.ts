import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ListaDeAlumnosComponent } from './layouts/dashboard/pages/alumnos/lista-de-alumnos/lista-de-alumnos.component';
import { CursosComponent } from './layouts/dashboard/pages/cursos/cursos.component';
import { UsuariosComponent } from './layouts/dashboard/pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'listAlums', component: ListaDeAlumnosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
