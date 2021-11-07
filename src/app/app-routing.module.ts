import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './modules/inicio/pagina-inicio/pagina-inicio.component';

const routes: Routes = [

  {
    path:'inicio',
    component:PaginaInicioComponent
  },
  {
    path:"gramatica",
    loadChildren: () =>
    import('./modules/gramatica/gramatica.module').then((m) => m.GramaticaModule),
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
