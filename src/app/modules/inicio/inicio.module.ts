import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
 
    
    
  ]})
export class InicioModule { }
