import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/personas.model';
import { Cuenta } from 'src/app/models/cuentas.model';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  user: Persona;

  constructor(private personaService: PersonaService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.user = new Persona();
  }

  signUp() {
    console.log(this.user);
    this.personaService.signUp(this.user).subscribe(
      async response => {
        if (response.code === 200) {
          this.router.navigate(['/login']);
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'Error durante el registro',
            buttons: ['OK']
          });
          alert.present();
        }
      },
      error => {
        console.log(<any>error)
      }
    );


  }

}
