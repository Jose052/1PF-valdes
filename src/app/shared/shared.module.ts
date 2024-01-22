import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { FullnamePipe } from './pipes/full-name.pipe';
import { EncabezadoEstandarDirective } from './directives/encabezado-estandar.directive';



@NgModule({
  declarations: [
    FormErrorsPipe,
    FullnamePipe,
    EncabezadoEstandarDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    FullnamePipe,
    FormErrorsPipe,
    EncabezadoEstandarDirective
  ]
})
export class SharedModule { }

