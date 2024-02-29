import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /users
        path: '',
        component: UsuariosComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule {}