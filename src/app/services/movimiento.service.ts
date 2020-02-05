import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movimiento } from "../models/movimientos.model";
import { GLOBAL } from "./global";

@Injectable({
  providedIn: "root"
})
export class MovimientoService {
  public url: string;
  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }

  registrarMov(movimiento: Movimiento): Observable<any> {
    let json = JSON.stringify(movimiento);
    let params = "json=" + json;
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    return this.http.post(this.url + "registrarMov", params, {
      headers: headers
    });
  }

  listarMovimientos(idCuenta: number) {
    return this.http.get(this.url + "/consultarMov/" + idCuenta);
  }
}
