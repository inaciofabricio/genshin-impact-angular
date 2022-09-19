import { AtualizarComponent } from './components/atualizar/atualizar.component';
import { InserirComponent } from './components/inserir/inserir.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './components/listar/listar.component';
import { DetalharComponent } from './components/detalhar/detalhar.component';

const routes: Routes = [
  {
    path: '',
    component: ListarComponent
  },
  {
    path: '/:id',
    component: DetalharComponent
  },
  {
    path: '/inserir',
    component: InserirComponent
  },
  {
    path: '/atualizar',
    component: AtualizarComponent
  },
  {
    path: '**',
    component: ListarComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
