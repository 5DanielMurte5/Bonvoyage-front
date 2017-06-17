import { Component , OnInit , Output, EventEmitter } from '@angular/core';
import {ViajesService} from './viajes.service'

declare var Materialize: any;

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css'],
  providers: [ViajesService]
})
export class ViajesComponent implements OnInit{
  public title: any;
  public viajes: any;
  public eventos :any;

  /*public selectedSource: any;

  @Output() idSource = new EventEmitter();*/

  constructor(
    private _service: ViajesService
  ) {

  }

  ngOnInit(){

    this.getViajes()
    this.getEventos()
  }

  getViajes() {
    this._service.getViajes()
    .subscribe( result =>{
      this.viajes  = result
      console.log(result)
    })
  }
  getEventos() {
    this._service.getEventos()
    .subscribe( result =>{
      this.eventos = result
      console.log(result)
    })
  }

  comprarViaje(id_viaje) {
    let viajero = JSON.parse(localStorage.getItem('user'));
    if(viajero) {
      let id_viajero = viajero.id_viajero
    this._service.comprarViaje(id_viaje, id_viajero)
    .subscribe( result =>{
       if(result.success) {
           Materialize.toast('Estas inscrito !', 4000)
       }else{
           Materialize.toast(result.error_message, 4000)
       }
    })
  } else {
    Materialize.toast('Debes ingresar o registrarte !', 4000)
  }

  }
  inscribirEvento(id_evento,participantes) {
    let viajero = JSON.parse(localStorage.getItem('user'));
    if(viajero) {
      let id_viajero = viajero.id_viajero
      console.log(id_viajero, id_evento)
    this._service.inscribirEvento(id_evento, id_viajero)
    .subscribe( result =>{
       if(result.success) {
           Materialize.toast('Estas inscrito !', 4000)
       } else {

          Materialize.toast(result.error_message, 4000)
       }
    })
   } else {
    Materialize.toast('Debes ingresar o registrarte !', 4000)
   }

  }




}
