import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../layouts/dashboard/pages/alumnos/lista-de-alumnos/lista-de-alumnos-model';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    const result = `${value.firstName} ${value.lastName}`;

    return result;
  }

}