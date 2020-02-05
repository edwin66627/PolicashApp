import { Injectable } from '@angular/core';
import { Persona } from '../models/personas.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  user:Persona;
  constructor() { 
    this.user = new Persona();
  }

  guardarStorage(user:Persona){
    localStorage.setItem('user', JSON.stringify(user))
  }

  cargarStorage(){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
      return this.user;
    }
  }
}
