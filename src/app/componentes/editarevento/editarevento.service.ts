import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class  EditarService  {

 private headers: Headers;

    constructor(
        private _http: Http
    ) {
    this.headers = new Headers();
    this.headers = new Headers({
          'Content-Type': 'application/json',
      });
    }

    editarEvento(nombre,fecha, lugar, descripcion,participantes,id_viajero,id_evento) {

      let body = {
        nombre:nombre,
        fecha : fecha,
        lugar:lugar,
        descripcion: descripcion,
        participantes:participantes,
        id_viajero:id_viajero,
        id_evento:id_evento
      }

      let params = JSON.stringify(body)
      return this._http.post("http://localhost:4000/eventos/editar", params ,  {headers: this.headers })
        .map(res => res.json())
    }

getEvento(id_evento){
  return this._http.get(`http://localhost:4000/eventos/${id_evento}`)
    .map(res => res.json())
}

}
