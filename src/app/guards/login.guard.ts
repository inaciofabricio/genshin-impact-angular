import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

      if(JSON.parse(String(localStorage.getItem("usuario"))) != null){
        this.router.navigateByUrl("/dashboard");
      }

      return true;

    }
}
