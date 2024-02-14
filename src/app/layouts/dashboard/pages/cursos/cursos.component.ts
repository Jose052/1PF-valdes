import { Component, OnInit } from '@angular/core';
import { Curso } from './cursos-model';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  displayedColumns = ['Id', 'Nombre', 'Duracion', 'Dificultad']
  dataSource: Curso[]=[]

  constructor(private cursoService: CursosService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.cursoService.getCursos().subscribe(
      {next :(cursos:any) =>{
        this.dataSource = cursos
        console.log(this.dataSource)
      }}
    )
  }

}
