import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Movimiento } from "src/app/models/movimientos.model";
import { MovimientoService } from "src/app/services/movimiento.service";
import { Router } from "@angular/router";
import { GeneralService } from 'src/app/services/general.service';
import { Persona } from 'src/app/models/personas.model';

@Component({
  selector: "app-ahorrar",
  templateUrl: "./ahorrar.page.html",
  styleUrls: ["./ahorrar.page.scss"]
})
export class AhorrarPage implements OnInit {
  user: Persona;
  monto: number;
  idCuenta = 1111;
  movimiento: Movimiento;
  constructor(
    private alertController: AlertController,
    private router: Router,
    private movimientoService: MovimientoService,
    private generalService: GeneralService
  ) {
    this.movimiento = new Movimiento();
  }

  ngOnInit() {
    //Recuperar datos del usuario
    this.user = this.generalService.cargarStorage();
  }

  async registrarMov() {
    this.movimiento.tipoMovimiento = "C";
    this.movimiento.descMovimiento = "Ahorro";
    this.movimiento.valorMovimiento = this.monto;
    this.movimiento.estadoMovimiento = "A";
    this.movimiento.detMovimiento = "Depósito en cuenta";
    this.movimiento.idCuenta = this.user.cuenta.idCuenta;
    this.movimiento.codigoAuth = "";

    console.log(this.movimiento);
    this.ahorrarMov();
    const alert = await this.alertController.create({
      header: "Exitoso!",
      subHeader: "Ahorraste",
      message: String(this.monto),
      buttons: ["OK"]
    });

    await alert.present();
  }

  ahorrarMov() {
    this.movimientoService.registrarMov(this.movimiento).subscribe(
      response => {
        console.log(response.code);
        if (response.code === 200) {
          this.router.navigate(["/principal"]);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
