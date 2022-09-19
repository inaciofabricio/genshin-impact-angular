import { Personagem } from '../model/personagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {filter, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quantidades } from '../model/quantidades';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  private readonly API = '/assets/bd-local/';

  constructor(
    private httpClient : HttpClient
  ) { }

  list(): Observable<Personagem[]> {
    return this.httpClient
              .get<Personagem[]>(this.API + 'personagens.json')
              .pipe(
                map((res: Personagem[]) => {
                  return res;
                })
              )
  }

  one(id:Number): Observable<Personagem> {
    return this.httpClient
              .get<Personagem[]>(this.API + 'personagens.json')
              .pipe(
                map(response => {
                  const jsonData = response as Personagem[];
                  return jsonData.filter(item => item.id === id)[0];
                })
              )
  }

  getQuatidades(): Observable<Quantidades> {
    return this.httpClient
              .get<Quantidades>(this.API + 'quantidades.json')
              .pipe(map((res: Quantidades) => { return res; }))
  }
}
