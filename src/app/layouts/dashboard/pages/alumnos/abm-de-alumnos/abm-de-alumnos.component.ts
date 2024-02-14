import { Component, Inject, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../alumnos-model';

@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrl: './abm-de-alumnos.component.scss'
})
export class ABMDeAlumnosComponent {
  alumnForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<ABMDeAlumnosComponent>,

    // RECIBO LA DATA
    @Inject(MAT_DIALOG_DATA) public alum?: Alumno
  ) {
    this.alumnForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.alum) {
      this.alumnForm.patchValue(this.alum);
    }
  }

  onSubmit(): void {
    if (this.alumnForm.invalid) {
      this.alumnForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.alumnForm.value);
    }
  }

  @Input()
  dataSource: Alumno[] = [];

}
