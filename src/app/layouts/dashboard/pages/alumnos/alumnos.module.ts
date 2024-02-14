import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar'
import { SharedModule } from '../../../../shared/shared.module';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';
import { alumnosService } from './alumnos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AlumnosComponent,
    ABMDeAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    SharedModule,
    AlumnosRoutingModule,
  ],
  providers:[
    alumnosService,
    HttpClientModule
  ]
})
export class ListaDeAlumnosModule { }
