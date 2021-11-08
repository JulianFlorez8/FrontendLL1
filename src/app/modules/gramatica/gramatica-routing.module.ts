import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGramaticaComponent } from './listar-gramatica/listar-gramatica.component';
import { VerGramaticaComponent } from './ver-gramatica/ver-gramatica.component';

const routes: Routes = [
  {
    path:'ver-gramatica/:id',
    component:VerGramaticaComponent
  },
  {
    path: 'listar-gramatica',
    component: ListarGramaticaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GramaticaRoutingModule {}
