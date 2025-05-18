
export class prenotazioni {
    nome: string;
    cognome: string;
    indirizzo: string;
    telefono: number;
    email: string;
    data: Date;
    ora: string   ;

    constructor(nome: string, cognome: string, indirizzo: string, telefono: number, email: string, data: Date, ora: string   ){
        this.nome = nome
        this.cognome = cognome
        this.indirizzo = indirizzo
        this.telefono = telefono
        this.email = email
        this.data = data
        this.ora = ora
    }
}

export interface Response
{
    id :number
}