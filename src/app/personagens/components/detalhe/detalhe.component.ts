import { Personagem } from './../../model/personagem';
import { PersonagensService } from './../../services/personagens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quantidades } from '../../model/quantidades';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  personagem?: Personagem;
  quantidades?: Quantidades;

  constructor(
    private route: ActivatedRoute,
    private personagensService: PersonagensService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personagensService.one(id).subscribe(res => this.personagem = res);
    this.personagensService.getQuatidades().subscribe(res => this.quantidades = res);
  }

  ngOnInit(): void {


  }

}
