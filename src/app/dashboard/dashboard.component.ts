import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) {

    if(JSON.parse(String(localStorage.getItem("usuario"))) == null){
      this.router.navigateByUrl("/login");
    }

  }

  ngOnInit(): void {
  }

}
