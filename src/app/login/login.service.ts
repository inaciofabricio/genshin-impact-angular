import { map } from 'rxjs/operators';
import { Usuario } from './model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient : HttpClient
  ) { }

  logar(usuario: Usuario): Observable<any> {
    return this.httpClient
              .post<Usuario>(environment.apiUrl + 'login', usuario)
              .pipe( map( (res: any) => { return res; } ) )
  }
}
