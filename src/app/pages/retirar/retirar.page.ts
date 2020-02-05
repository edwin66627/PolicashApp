import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Movimiento } from 'src/app/models/movimientos.model';
import { Persona } from 'src/app/models/personas.model';
import { GeneralService } from 'src/app/services/general.service';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.page.html',
  styleUrls: ['./retirar.page.scss'],
})
export class RetirarPage implements OnInit {
  movimiento: Movimiento;
  user: Persona;

  constructor(public alertController: AlertController,
    private generalService: GeneralService,
    private movimientoService: MovimientoService,
    private router: Router) {
    this.movimiento = new Movimiento();
    this.movimiento.descMovimiento = "Retiro";
    this.movimiento.tipoMovimiento = "R";
    this.movimiento.estadoMovimiento = "P"; //Programado
    this.movimiento.codigoAuth = String(Math.floor(Math.random() * 9999) + 1000);
    this.user = generalService.cargarStorage();
  }

  retirar() {
    this.movimiento.detMovimiento = "Retiro programado";
    this.movimiento.idCuenta = this.user.cuenta.idCuenta;
    console.log(this.movimiento);
    this.movimientoService.registrarMov(this.movimiento).subscribe(
      async response => {
        if (response.code === 200) {
          this.router.navigate(["/principal"]);
          const alert = await this.alertController.create({
            header: 'Notificación',
            message: 'Retiro programado, Codigo ' + this.movimiento.codigoAuth,
            buttons: ["OK"]
          });
          alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Notificación',
            message: 'No fue posible su retiro',
            buttons: ["OK"]
          });
          alert.present();
        }
      }, error => {
        console.log(error);
      }
    );


  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Su retiro fue exitoso!',
      subHeader: 'Nuevo saldo',
      message: '$$$$$$$.',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
