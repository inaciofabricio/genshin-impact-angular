import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { ListarComponent } from './components/listar/listar.component';
import { DetalharComponent } from './components/detalhar/detalhar.component';
import { InserirComponent } from './components/inserir/inserir.component';
import { AtualizarComponent } from './components/atualizar/atualizar.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    ListarComponent,
    DetalharComponent,
    InserirComponent,
    AtualizarComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CategoriaModule { }
