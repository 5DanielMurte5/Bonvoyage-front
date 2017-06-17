import { Component, OnInit } from '@angular/core';
import {CrearEService } from './evento.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
  providers: [CrearEService],

})
export class CrearEComponent implements OnInit {
  public error: any;
  public user:any;


  constructor(
    private _service: CrearEService,
    private router: Router
  ) {

  }

  ngOnInit() {
    if(!localStorage.getItem('user')) {
     this.router.navigate(['ingresar'])
    } else {
     this.user = localStorage.getItem('user')
     this.user = JSON.parse(this.user);
  }
}


  crearEvento(form) {
    console.log("1");
    this._service.crearEvento(form.nombre, form.fecha,form.lugar ,form.descripcion, form.participantes , this.user.id_viajero)
    .subscribe(
      result => {
        if(result.success) {
          this.error = '';
          this.router.navigate(['perfil'])
          location.reload()
        } else {
          this.error = 'Error al crear el evento '
        }
      },
    )
  }


}
