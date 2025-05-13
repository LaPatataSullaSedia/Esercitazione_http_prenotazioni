import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrenComponent } from './pren/pren.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrenComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'prenotazioni';
  data: Object;
  loading!: boolean;
  o! :Observable<Object>;
  constructor(public http: HttpClient) {
    this.data = new Object
  }
  

makerequest():void{
     this.loading = true;
     this.o = this.http.get('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni');
     this.o.subscribe(this.getData);
}
getData = (d : Object) =>
  {
    this.data = d;
    this.loading = false;
    console.log(this.data)
  }


  salva(nome : HTMLInputElement,cognome : HTMLInputElement,indirizzo : HTMLInputElement,telefono : HTMLInputElement,email : HTMLInputElement,data : HTMLInputElement,ora : HTMLInputElement) : boolean{
    
    return false
  }
  ngOnInit(): void {
    this.makerequest()
  }
}
