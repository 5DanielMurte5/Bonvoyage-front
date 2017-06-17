import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class InscritosService  {

    constructor(
        private _http: Http
    ) {

    }

    getInscritos(id_evento) {
      return this._http.get(`http://localhost:4000/inscritos/${id_evento}`)
        .map(res => res.json())
    }
}
