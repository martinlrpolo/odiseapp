import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from 'src/services/general.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "login/";

  login(data): any 
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  	return this.http.post(this.url + "login", data, {headers : headers}); 
  }

}
