import { Component , OnInit , Output, EventEmitter } from '@angular/core';
import {PerfilService} from './perfil.service'
import { Router } from '@angular/router'

declare var Materialize: any;
declare var $: any;
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [PerfilService]
})
export class PerfilComponent implements OnInit{
  public eventos: any;
  public viajes: any;
  public user: any;



  constructor(
    private _service: PerfilService,
    private router : Router
  ) {
  this.user = []
  }

  ngOnInit(){

   if(!localStorage.getItem('user')) {
    this.router.navigate(['ingresar'])
  } else {
    this.user = localStorage.getItem('user')
    this.user = JSON.parse(this.user);
    this.getViajes(this.user);
    this.getEventos(this.user);
  }
  }

  getViajes(user) {
    this._service.getViajes(user)
    .subscribe( result =>{
      this.viajes  = result
    })
  }

  getEventos(user) {
    this._service.getEventos(user)
    .subscribe( result =>{
      this.eventos  = result
    })
  }

  eliminarEvento(id_evento,id_viajero){
    this._service.eliminarEvento(id_evento,id_viajero)
    .subscribe( result =>{
      if(result.success){
        location.reload()
        Materialize.toast('Estas Desinscrito , putito !', 4000)
      }else{
        Materialize.toast('Error al desinscribirse ', 4000)
      }
    })

    }

    abrirModal() {
      $('#verificacion').modal('open');
    }


}
