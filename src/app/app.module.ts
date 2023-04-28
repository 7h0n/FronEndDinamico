import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { InfoActionsComponent } from './Componentes/info-actions/info-actions.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { AcercadeComponent } from './Componentes/acercade/acercade.component';
import { NombreComponent } from './Componentes/nombre/nombre.component';
import { ApellidoComponent } from './Componentes/apellido/apellido.component';
import { TituloComponent } from './Componentes/titulo/titulo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InfoActionsComponent,
    ExperienciaComponent,
    AcercadeComponent,
    NombreComponent,
    ApellidoComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
