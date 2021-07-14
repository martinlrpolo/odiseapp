import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { GeneralService } from 'src/services/general.service';
import { CountryService } from 'src/services/country.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  constructor(
    private generalService : GeneralService,
    private registerService : RegisterService,
    private countrService : CountryService
  ) { 
    
  }

  public data : FormGroup;
  public countries : any = [];
  public file: File;

  ngOnInit() 
  {
    this.data = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      re_password: new FormControl('', Validators.required),
      pic: new FormControl('', Validators.required),
    });
    this.allCountries();
  }


  register()
  {
    let formdata: FormData = new FormData();
    formdata.append('full_name', this.data.value.full_name);
    formdata.append('email', this.data.value.email);
    formdata.append('phone', this.data.value.phone);
    formdata.append('password', this.data.value.re_password);
    formdata.append('country', this.data.value.country);
    formdata.append('file', this.file);
    this.registerService.register(formdata).subscribe(
  		response => {
        this.generalService.openmsg("Registro correcto, por favor ingresar al sistema", "success");
  		},
  		error => {
        this.generalService.openmsg("Verificar información", "error");
  		}
    );
  }

  allCountries()
  {
    this.countrService.all().subscribe(
  		response => {
        this.countries = response;
  		},
  		error => {
        console.log(error);
  		}
    );
  }

  onFileChange(event)
  {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => 
      {
        this.data.controls['pic'].setValue(file.name);
        this.file = file;
      };
    }else{
      this.data.controls['pic'].setValue(null);
    }
  }

}
