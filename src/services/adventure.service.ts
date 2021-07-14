import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "adventure/";

  all(): any 
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  	return this.http.get(this.url + "all", {headers : headers}); 
  }

  show(id) : any
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
  	return this.http.get(this.url + "show/" + id, {headers : headers}); 
  }
  
}
