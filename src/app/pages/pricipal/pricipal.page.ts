import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { CuentaService } from 'src/app/services/cuenta.service';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/models/personas.model';
import { Cuenta } from 'src/app/models/cuentas.model';

@Component({
  selector: 'app-pricipal',
  templateUrl: './pricipal.page.html',
  styleUrls: ['./pricipal.page.scss'],
})
export class PricipalPage implements OnInit {
  user:Persona;
  cuenta:Cuenta;
  constructor(private generalService:GeneralService,
              private cuentaService: CuentaService,
              private alertCtrl:AlertController) { 
    this.cuenta = new Cuenta();
  }

  ngOnInit() {
    //Consultar la cuenta del usuario
    this.user = this.generalService.cargarStorage();
    this.cuentaService.getCuenta(this.user).subscribe(
      async response => {
        if(response.status === "success"){
          this.cuenta.idCuenta = response.cuenta.id;
          this.cuenta.saldo = response.cuenta.saldo;
          this.user.cuenta = this.cuenta;
          this.generalService.guardarStorage(this.user);
        }else{
          const alert = await this.alertCtrl.create({
            header: 'PoliCash',
            message: 'Error recuperando datos de la cuenta',
            buttons: ['OK']
          });
          alert.present();
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
