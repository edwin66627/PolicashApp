import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  public url:string;
  constructor(public http:HttpClient) { 
    this.url = GLOBAL.url;
  }

  getCuenta(user):Observable<any>{
    return this.http.get(this.url+'consultarCuenta/'+user.identificacion)
  }
}
