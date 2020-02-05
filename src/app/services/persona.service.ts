import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url: string;
  constructor(public http: HttpClient) {
    //Recuperar url de archivo global.ts
    this.url = GLOBAL.url;
  }

  login(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + 'login', params, { headers: headers });
  }

  signUp(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + 'registrar', params, { headers: headers });
  }

  getIdCuenta(id: number) {
    return this.http.get(this.url + "/getIdCuenta/" + id);
  }
}
