import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private generalService : GeneralService,
    private loginService : LoginService
  ) { }

  public data : FormGroup;

  ngOnInit()
  {
    this.data = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login()
  {
    let data = {
      'email' : this.data.value.email,
      'password' : this.data.value.password
    };
    this.loginService.login(data).subscribe(
  		response => {
        this.generalService.openmsg("La información se ha cargado correctamente", "success");
  		},
  		error => {
        this.generalService.openmsg("Verificar información", "error");
  		}
    );
  }

}
