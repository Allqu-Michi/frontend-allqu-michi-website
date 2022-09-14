import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicePetsService {

  baseUrl = environment.baseUrl+'/rest/v1/';

  constructor(
    private _http: HttpClient
  ) { }

  postCreatePet(req:any){
    return this._http.post(`${this.baseUrl}Pet`,req,{observe: 'response'});
  }
}
