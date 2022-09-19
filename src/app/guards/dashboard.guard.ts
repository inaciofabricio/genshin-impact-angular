import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

      if(JSON.parse(String(localStorage.getItem("usuario"))) == null){
        this.router.navigateByUrl("/login");
      }

      return true;

    }
}
