import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pren',
  standalone: true,
  imports: [],
  templateUrl: './pren.component.html',
  styleUrl: './pren.component.css'
})
export class PrenComponent {
@Input() Data : Object

constructor(){
  this.Data = new Object
}
}
