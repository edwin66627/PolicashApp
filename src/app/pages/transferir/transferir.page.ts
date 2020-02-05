import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Movimiento } from 'src/app/models/movimientos.model';
import { Persona } from 'src/app/models/personas.model';
import { GeneralService } from 'src/app/services/general.service';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.page.html',
  styleUrls: ['./transferir.page.scss'],
})
export class TransferirPage implements OnInit {

  movimiento: Movimiento;
  cuentaDestino: number;
  user: Persona;

  constructor(public alertController: AlertController,
    private generalService: GeneralService,
    private movimientoService: MovimientoService,
    private router: Router) {
    this.movimiento = new Movimiento();
    this.movimiento.descMovimiento = "Transferencia";
    this.movimiento.tipoMovimiento = "D";
    this.movimiento.estadoMovimiento = "P"; //Programado
    this.movimiento.codigoAuth = "";

    this.user = generalService.cargarStorage();
  }

  transferir() {
    this.movimiento.detMovimiento = "Transferencia a " + this.cuentaDestino;
    this.movimiento.idCuenta = this.user.cuenta.idCuenta;
    console.log(this.movimiento);
    this.movimientoService.registrarMov(this.movimiento).subscribe(
      async response => {
        if (response.code === 200) {
          //Registrar movimiento en cuenta destino
          this.movimiento.tipoMovimiento = "C";
          this.movimiento.estadoMovimiento = "A";
          this.movimiento.detMovimiento =
            "Transferencia desde " + this.user.cuenta.idCuenta;
          this.movimiento.idCuenta = this.cuentaDestino;
          console.log("Mov Dest: " + this.movimiento);

          this.movimientoService.registrarMov(this.movimiento).subscribe(
            async response => {
              if (response.code === 200) {
                this.router.navigate(["/principal"]);
                const alert = await this.alertController.create({
                  header: 'Notificación',
                  message: 'Transferencia Exitosa',
                  buttons: ["OK"]
                });
                alert.present();
              } else {
                const alert = await this.alertController.create({
                  header: 'Notificación',
                  message: 'No fue posible depositar en cuenta destino',
                  buttons: ["OK"]
                });
                alert.present();
              }
            }, error => {
              console.log(error);
            }
          );
        } else {
          const alert = await this.alertController.create({
            header: 'Notificación',
            message: 'No fue posible realizar la transacción',
            buttons: ["OK"]
          });
          alert.present();
        }
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
