import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'genshin-impact';
  nome: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {

    let usuario = JSON.parse(String(localStorage.getItem("usuario")));

    if(usuario != null){
      this.nome =  usuario.nome;
    }

  }

  logout(){
    if(JSON.parse(String(localStorage.getItem("usuario"))) != null){
      localStorage.removeItem("usuario");
      this.router.navigateByUrl("");
      this.nome = "";
    }
  }
}
