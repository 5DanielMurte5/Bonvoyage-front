import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class  PerfilService  {

    constructor(
        private _http: Http
    ) {

    }

    getViajes(user) {
      return this._http.get(`http://localhost:4000/viajes/viajero/${user.id_viajero}`)
        .map(res => res.json())
    }
    getEventos(user) {
      return this._http.get(`http://localhost:4000/eventos/viajero/${user.id_viajero}`)
        .map(res => res.json())
    }
    
    eliminarEvento(id_evento,id_viajero) {
      return this._http.get(`http://localhost:4000/eventos/eliminar/${id_viajero}/${id_evento}`)
        .map(res => res.json())
    }




}
