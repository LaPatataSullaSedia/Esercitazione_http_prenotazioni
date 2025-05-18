import { DatePipe, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { prenotazioni } from '../pren.model';
import { DettagliPrenotazioneComponent } from '../dettagli-prenotazione/dettagli-prenotazione.component';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [JsonPipe, DatePipe,DettagliPrenotazioneComponent],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() pre!: prenotazioni[];
  dett!: prenotazioni;


  showDetails(x: prenotazioni){
    this.dett = x;
  }
}
