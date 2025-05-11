import { Component, Input } from '@angular/core';
import { prenotazioni } from '../profilo.modul';

@Component({
  selector: 'app-pren',
  standalone: true,
  imports: [prenotazioni],
  templateUrl: './pren.component.html',
  styleUrl: './pren.component.css'
})
export class PrenComponent {
@Input() pre : prenotazioni = new prenotazioni("","","",0,"",0,0)
}
