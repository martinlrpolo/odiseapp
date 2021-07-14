import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "country/";

  all(): any 
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  	return this.http.get(this.url + "all", {headers : headers}); 
  }
}
