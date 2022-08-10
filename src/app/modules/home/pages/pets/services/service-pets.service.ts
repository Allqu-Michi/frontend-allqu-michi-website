import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicePetsService {
  
  baseUrl = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) {  }

  getPets(){
    return this._http.get(`${this.baseUrl}Pet?select=*`);
  }
  getPetById(petTypeId:any){
    return this._http.get(`${this.baseUrl}Pet?petTypeId=in.(${petTypeId})&select=*`);
  }
}
