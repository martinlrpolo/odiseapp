import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from 'src/services/general.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "user/";

  register(data): any 
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  	return this.http.post(this.url + "add", data); 
  }
  
}
