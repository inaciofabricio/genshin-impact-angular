import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheComponent } from './components/detalhe/detalhe.component';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: ListarComponent
  },
  {
    path: ':id',
    component: DetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonagensRoutingModule { }
