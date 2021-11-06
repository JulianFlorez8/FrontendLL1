import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GramaticaRoutingModule } from './gramatica-routing.module';
import { VerGramaticaComponent } from './ver-gramatica/ver-gramatica.component';
import { ListarGramaticaComponent } from './listar-gramatica/listar-gramatica.component';


@NgModule({
  declarations: [
    VerGramaticaComponent,
    ListarGramaticaComponent
  ],
  imports: [
    CommonModule,
    GramaticaRoutingModule
  ]
})
export class GramaticaModule { }
