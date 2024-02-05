import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuarios-model';

import { UsuariosService } from './usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {

  displayedColumns = ['Id', 'Nombre', 'Email', 'Rol']
  dataSource: Usuario[]=[]

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.usuariosService.getUsuarios().subscribe(
      {next :(usuarios:any) =>{
        this.dataSource = usuarios
        console.log(this.dataSource)
      }}
    )
  }

}
