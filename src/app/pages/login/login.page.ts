import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/personas.model';
import { AlertController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:Persona;

  constructor(private personaService:PersonaService,
              private generalService:GeneralService,
              private route: ActivatedRoute,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.user = new Persona();
  }

  login(){
    console.log(this.user);    
    this.personaService.login(this.user).subscribe(
      async response => {
        if(response === 1){
          this.user.contrasena = "";
          this.generalService.guardarStorage(this.user);
          this.router.navigate(['/principal']);
        }else{
          const alert = await this.alertCtrl.create({         
            header: 'Login',                           
            message: 'Datos Incorrectos',         
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
