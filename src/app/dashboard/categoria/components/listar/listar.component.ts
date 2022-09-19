import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../model/categoria';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  categorias: Categoria[] = [];
  displayedColumns: string[] = ['nome', 'editar', 'excluir'];

  erro: string = '';

  constructor(
    private categoriaService : CategoriaService
  ) { }

  ngOnInit(): void {
    this.categoriaService
        .list()
        .subscribe(
          (res) => {
            this.categorias = res;
          },
          err => {
            this.erro = err.error.erro;
          }
        );
  }

}
