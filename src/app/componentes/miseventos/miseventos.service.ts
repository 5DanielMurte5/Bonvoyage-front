import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class  MisEventosService  {

    constructor(
        private _http: Http
    ) {

    }

    getEventos(user) {
      return this._http.get(`http://localhost:4000/eventos/creados/${user.id_viajero}`)
        .map(res => res.json())

    }
    eliminarEvento(id_evento) {
      return this._http.get(`http://localhost:4000/eventos/eliminar/${id_evento}`)
        .map(res => res.json())

    }


}
