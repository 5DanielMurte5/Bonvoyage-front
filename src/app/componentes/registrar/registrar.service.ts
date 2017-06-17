import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class  RegistrarService  {

 private headers: Headers;

    constructor(
        private _http: Http
    ) {
    this.headers = new Headers();
    this.headers = new Headers({
          'Content-Type': 'application/json',
      });
    }

    registrarViajero(nombre, documento, edad, sexo, email, password) {
      let body = {
        nombre:nombre,
        documento:documento,
        edad:edad,
        sexo:sexo,
        email:email,
        password: password
      }
      let params = JSON.stringify(body)
      return this._http.post("http://localhost:4000/viajero/nuevo", params ,  {headers: this.headers })
        .map(res => res.json())
    }



}
