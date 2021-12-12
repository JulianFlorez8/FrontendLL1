import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './modules/inicio/pagina-inicio/pagina-inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VerGramaticaComponent } from './modules/gramatica/ver-gramatica/ver-gramatica.component';
import { ListarGramaticaComponent } from './modules/gramatica/listar-gramatica/listar-gramatica.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modules/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GramticaLRARComponent } from './modules/gramtica-lrar/gramtica-lrar.component';
import { GramticaL0Component } from './modules/gramtica-l0/gramtica-l0.component';
@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    VerGramaticaComponent,
    ListarGramaticaComponent,
    ModalComponent,
    GramticaLRARComponent,
    GramticaL0Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
