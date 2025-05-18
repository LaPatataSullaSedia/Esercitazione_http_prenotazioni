import { Component, Input } from '@angular/core';
import { prenotazioni } from '../pren.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dettagli-prenotazione',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrl: './dettagli-prenotazione.component.css'
})
export class DettagliPrenotazioneComponent {
@Input() dett!: prenotazioni;
}