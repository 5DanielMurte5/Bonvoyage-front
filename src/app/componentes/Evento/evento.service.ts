import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class  CrearEService  {

 private headers: Headers;

    constructor(
        private _http: Http
    ) {
    this.headers = new Headers();
    this.headers = new Headers({
          'Content-Type': 'application/json',
      });
    }

    crearEvento(nombre,fecha, lugar, descripcion,participantes,id_viajero) {
      console.log("2");
      let body = {
        nombre:nombre,
        fecha : fecha,
        lugar:lugar,
        descripcion: descripcion,
        participantes:participantes,
        id_viajero:id_viajero
      }
      console.log(3);
      let params = JSON.stringify(body)
      return this._http.post("http://localhost:4000/evento/nuevo", params ,  {headers: this.headers })
        .map(res => res.json())
    }



}
