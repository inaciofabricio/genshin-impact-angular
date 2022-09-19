import { Component, OnInit } from '@angular/core';

import { Personagem } from '../../model/personagem';
import { PersonagensService } from '../../services/personagens.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  personagens: Personagem[] = [];

  constructor(
    private personagensService: PersonagensService
  ) {
      this.personagensService
        .list()
        .subscribe(res => this.personagens = res);

  }

  ngOnInit(): void {

  }

}
