import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/models/movimientos.model';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { PersonaService } from 'src/app/services/persona.service';
import { GeneralService } from 'src/app/services/general.service';
import { Persona } from 'src/app/models/personas.model';
import { CuentaService } from 'src/app/services/cuenta.service';
import { Cuenta } from 'src/app/models/cuentas.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  idcuenta: number;
  user: Persona;
  cuenta: Cuenta;
  movimientos: Movimiento[];
  constructor(private movimientoService: MovimientoService,
    private cuentaService: CuentaService,
    private generalService: GeneralService,
    private alertCtrl: AlertController) {
    this.cuenta = new Cuenta();
  }

  ngOnInit() {
  }

  cargarMovimientos() {
    this.user = this.generalService.cargarStorage();
    this.cuentaService.getCuenta(this.user).subscribe(
      async response => {
        if (response.status === "success") {
          this.cuenta.idCuenta = response.cuenta.id;

        } else {
          const alert = await this.alertCtrl.create({
            header: 'PoliCash',
            message: 'Error recuperando datos de la cuenta',
            buttons: ['OK']
          });
          alert.present();
        }
      });
    this.movimientoService.listarMovimientos(this.cuenta.idCuenta);
  }

}
