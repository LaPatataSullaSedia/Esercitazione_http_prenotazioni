import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { prenotazioni } from './profilo.modul';
import { PrenComponent } from './pren/pren.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prenotazioni';
  pre : prenotazioni[] = []


  salva(nome : HTMLInputElement,cognome : HTMLInputElement,indirizzo : HTMLInputElement,telefono : HTMLInputElement,email : HTMLInputElement,data : HTMLInputElement,ora : HTMLInputElement) : boolean{
    this.pre.push(new prenotazioni(nome.value, cognome.value , indirizzo.value, 0 , email.value, new Date(data.value) ,0))
    return false
  }
}
