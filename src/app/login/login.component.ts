import { Usuario } from './model/usuario';
import { LoginService } from './login.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
///import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // fromUrl?: string;
  // loginForm?: FormGroup;

  erro: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  senhaFormControl = new FormControl('', [Validators.required]);

  constructor(
    private loginService : LoginService,
    private router: Router
  ) {

    if(JSON.parse(String(localStorage.getItem("usuario"))) != null){
      this.router.navigateByUrl("");
    }

   }

  ngOnInit(): void { }

  login(){

    if(!this.disabled()){

      let usuario: Usuario = {
        email : this.emailFormControl.value,
        password : this.senhaFormControl.value
      };

      this.loginService.logar(usuario)
        .subscribe(
          (res) => {
            if(res.access_token){
              localStorage.setItem("usuario", JSON.stringify(res));
              location.reload();
            } else {
              this.erro = "Sistema indisponível.";
            }
          },
          err => {
            this.erro = err.error.erro;
          }
        );

    }
  }

  disabled(){
    if(this.emailFormControl.hasError('email') ||
      this.emailFormControl.hasError('required') || this.senhaFormControl.hasError('required')) {
        return true;
    } else {
      return false;
    }
  }

}
