import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class  UserProfilService  {

    constructor(
        private _http: Http
    ) {

    }

    getViajes(id_viajero) {
      return this._http.get(`http://localhost:4000/viajes/viajero/${id_viajero}`)
        .map(res => res.json())
    }
    getEventos(id_viajero) {
      return this._http.get(`http://localhost:4000/eventos/viajero/${id_viajero}`)
        .map(res => res.json())
    }
    getViajero(id_viajero) {
      return this._http.get(`http://localhost:4000/viajero/${id_viajero}`)
        .map(res => res.json())
    }


    getEventosU(id_viajero) {
      return this._http.get(`http://localhost:4000/eventos/viajero/${id_viajero}`)
        .map(res => res.json())
    }

    inscribirEvento(id_evento,id_viajero) {
      return this._http.get(`http://localhost:4000/inscribir/viajero/evento/${id_evento}/${id_viajero}`)
        .map(res => res.json())
    }

}
