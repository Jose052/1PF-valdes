import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { FullnamePipe } from './pipes/full-name.pipe';
import { EncabezadoEstandarDirective } from './directives/encabezado-estandar.directive';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ValidationErrorsPipe } from './validation-errors.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    FormErrorsPipe,
    FullnamePipe,
    EncabezadoEstandarDirective,
    ValidationErrorsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports : [
    FullnamePipe,
    FormErrorsPipe,
    EncabezadoEstandarDirective,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    ValidationErrorsPipe,
    MatPaginatorModule,
  ]
})
export class SharedModule { }

