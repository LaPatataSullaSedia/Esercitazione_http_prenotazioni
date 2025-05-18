import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { prenotazioni, Response } from './pren.model';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { DettagliPrenotazioneComponent } from './dettagli-prenotazione/dettagli-prenotazione.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe,ListaPrenotazioniComponent,DettagliPrenotazioneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'prenotazioni';
  pre : prenotazioni[] = []
  persona!: Observable<prenotazioni[]>
  nd! : prenotazioni;
  loading!: boolean;
  o! :Observable<Object>;
  data!: Object;
  obsPost = new Observable<Response>;
  constructor(public http: HttpClient) {}
  
  salva(nome: HTMLInputElement,cognome: HTMLInputElement,indirizzo: HTMLInputElement,telefono: HTMLInputElement,email: HTMLInputElement,data: HTMLInputElement,ora: HTMLInputElement
  ): boolean {
    if (
      !nome.value || !cognome.value || !indirizzo.value ||
      !telefono.value || !email.value || !data.value || !ora.value
    ) {
      alert("Compila tutti i campi prima di salvare.");
      return false;
    }
    const dataValue = new Date(data.value);
    const oraValue = ora.value;
    this.nd = new prenotazioni(
      nome.value,
      cognome.value,
      indirizzo.value,
      Number(telefono.value),
      email.value,
      dataValue,
      oraValue
    );
    this.loading = true;
    this.obsPost = this.http.post<Response>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni',JSON.stringify(this.nd));
    this.obsPost.subscribe(this.indentificativo);
    return false;
  }
  

  indentificativo = (data :Response) => {
    this.data = data;
    this.loading = false;
    console.log(data)

    if(data.id > 0 )
    {
      this.pre.push(this.nd);
    }
  }

  makeTypedRequest() {
    this.loading = true;
    this.persona = this.http.get<prenotazioni[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni')
    this.persona.subscribe(data => this.getData(data));
  }
  getData = (d : prenotazioni[]) =>
  {
    this.pre = d;
    this.loading = false;
    console.log(this.pre)
  }
  ngOnInit(): void {
    this.makeTypedRequest()
  }
}
