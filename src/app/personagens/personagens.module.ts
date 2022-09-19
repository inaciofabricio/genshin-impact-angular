import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DetalheComponent } from './components/detalhe/detalhe.component';
import { ListarComponent } from './components/listar/listar.component';
import { PersonagensRoutingModule } from './personagens-routing.module';


@NgModule({
  declarations: [
    ListarComponent,
    DetalheComponent
  ],
  imports: [
    CommonModule,
    PersonagensRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatInputModule
  ]
})
export class PersonagensModule { }
