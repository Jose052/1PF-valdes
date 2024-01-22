import { Component } from '@angular/core';
import { Alumno } from './lista-de-alumnos-model';

import { MatDialog } from '@angular/material/dialog';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';


@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrl: './lista-de-alumnos.component.scss'
})
export class ListaDeAlumnosComponent {
  displayedColumns = ['Id', 'Nombre completo', 'email', 'editar']
  dataSource: Alumno[]=[
    {
      id: "03085c13bbf52064c2802fa5",
      firstName: "Diego",
      lastName: "Diaz",
      email: "ddiaz@email.com"
    },
    {
      id: "f52064c2802fa54c2802fa5",
      firstName: "Giovanny",
      lastName: "Rosas",
      email: "GRosas@email.com"
    }
  ]

  constructor(private matDialog: MatDialog) {}

  openUsersDialog(): void {
    this.matDialog
      .open(ABMDeAlumnosComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.dataSource = [
              ...this.dataSource,
              {
                ...v,
                id: new Date().getTime(),
              },
            ];
          }
        },
      });
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


