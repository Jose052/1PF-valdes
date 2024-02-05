import { Component, OnInit } from '@angular/core';
import { Alumno } from './lista-de-alumnos-model';

import { MatDialog } from '@angular/material/dialog';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';
import { alumnosService } from './lista-de-alumnos.service';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrl: './lista-de-alumnos.component.scss'
})
export class ListaDeAlumnosComponent implements OnInit{
  displayedColumns = ['Id', 'Nombre completo', 'email', 'editar']
  dataSource: Alumno[]=[]

  constructor(private matDialog: MatDialog,
              private alumnService: alumnosService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.alumnService.getAlumnos().subscribe(
      {next :(alumnos:any) =>{
        this.dataSource = alumnos
      }}
    )
  }

  onEditAlumn(alumn: Alumno): void {
    this.matDialog
      .open(ABMDeAlumnosComponent, {
        data: alumn,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            // CREANDO UNA COPIA DEL ARRAY ACTUAL
            const arrayNuevo = [...this.dataSource];

            const indiceToEdit = arrayNuevo.findIndex((u) => u.id === alumn.id);

            arrayNuevo[indiceToEdit] = { ...arrayNuevo[indiceToEdit], ...v };

            this.dataSource = [...arrayNuevo];

            this.dataSource = this.dataSource.map((u) =>
              u.id === alumn.id ? { ...u, ...v } : u
            );
          }
        },
      });
  }

  onDeleteAlumn(alumId: string): void {
    if (confirm('Esta seguro?')) {
      this.dataSource = this.dataSource.filter((u) => u.id !== alumId);
    }
  }

}


