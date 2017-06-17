import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ViajesService  {

    constructor(
        private _http: Http
    ) {

    }

    getViajes() {
      return this._http.get("http://localhost:4000/viajes")
        .map(res => res.json())
    }
    getEventos() {
      return this._http.get("http://localhost:4000/eventos")
        .map(res => res.json())
    }

    comprarViaje(id_viaje,id_viajero) {
      return this._http.get(`http://localhost:4000/inscribir/viajero/viaje/${id_viaje}/${id_viajero}`)
        .map(res => res.json())
    }
    inscribirEvento(id_evento,id_viajero) {
      return this._http.get(`http://localhost:4000/inscribir/viajero/evento/${id_evento}/${id_viajero}`)
        .map(res => res.json())
    }




}
