import { Component, Input } from '@angular/core';
import { prenotazioni } from '../profilo.modul';

@Component({
  selector: 'app-pren',
  standalone: true,
  imports: [],
  templateUrl: './pren.component.html',
  styleUrl: './pren.component.css'
})
export class PrenComponent {
@Input() pre : prenotazioni = new prenotazioni("","","",0,"",new Date(2000,10,10),0)
dettagli : boolean = false
espandi() : boolean{
  if(this.dettagli){
    this.dettagli = false
  }else{
    this.dettagli = true
  }
  
  return false
}
}
