import { Component } from '@angular/core';
import { Usuario } from './usuarios-model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  displayedColumns = ['Id', 'Nombre', 'Email', 'Rol']
  dataSource: Usuario[]=[
    {
      id: '03085c13bbf52064c2802fa5',
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naru@mail.com',
      password: '123456',
      role: 'ADMIN',
    },
    {
      id: '03085c5478962064c2802fa5',
      firstName: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasu@mail.com',
      password: '123456',
      role: 'USER',
    },
  ]

  onUsuarioSubitted(ev:Usuario): void{
    this.dataSource=[...this.dataSource]
  }

}
