import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { Categoria } from './../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private httpClient : HttpClient
  ) { }

  list(): Observable<Categoria[]> {
    return this.httpClient
              .get<Categoria[]>(environment.apiUrl + 'categorias')
              .pipe(
                map((res: Categoria[]) => {
                  return res;
                })
              )
  }
}
