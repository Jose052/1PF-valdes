import { Component } from '@angular/core';
import { Curso } from './cursos-model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  displayedColumns = ['Id', 'Nombre', 'Duracion', 'Dificultad']
  dataSource: Curso[]=[
    {
      id: "03085c13bbf52064c2802fa5",
      name: "Nodejs",
      duration: new Date(),
      difficulty: "Junior"
    },
    {
      id: "f52064c2802fa54c2802fa5",
      name: "Reactjs",
      duration: new Date(),
      difficulty: "Developer"
    }
  ]

  onCursoSubitted(ev:Curso): void{
    this.dataSource=[...this.dataSource]
  }

}
