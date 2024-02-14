import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { ListaDeAlumnosModule } from './layouts/dashboard/pages/alumnos/alumnos.module';
import { CursosModule } from './layouts/dashboard/pages/cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    ListaDeAlumnosModule,
    CursosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
