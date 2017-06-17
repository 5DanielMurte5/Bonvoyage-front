import { Component , OnInit , Output, EventEmitter } from '@angular/core';
import {MisEventosService} from './miseventos.service'
import { Router } from '@angular/router'

declare var Materialize: any;
declare var $: any;
@Component({
  selector: 'app-miseventos',
  templateUrl: './miseventos.component.html',
  styleUrls: ['./miseventos.component.css'],
  providers: [MisEventosService]
})
export class MisEventosComponent implements OnInit{
  public eventos: any;
  public user: any;
  public selectedEvent : any;

  @Output() id_evento = new EventEmitter();

  constructor(
    private _service: MisEventosService,
    private router : Router
  ) {
  this.user = []
  this.selectedEvent = []
  }

  ngOnInit(){

  if(!localStorage.getItem('user')) {
    this.router.navigate(['ingresar'])
  } else {
    this.user = localStorage.getItem('user')
    this.user = JSON.parse(this.user);
    this.getEventos(this.user);
  }
  }

  getEventos(user) {
    this._service.getEventos(user)
    .subscribe( result =>{
      this.eventos  = result
    })
  }

  eliminarEvento(id_evento){
    this._service.eliminarEvento(id_evento)
    .subscribe( result =>{
      if(result.success){
        this.getEventos(this.user)
        Materialize.toast('Evento Borrado', 4000)
      }else{
        Materialize.toast('Error al eliminar el evento', 4000)
      }
    })
  }


  abrirModalInscritos(evento) {
    this.selectedEvent = evento;
    $('#inscritos').modal('open');
  }





  id(id_evento){
    this.id_evento.emit(id_evento)
  }


 }
