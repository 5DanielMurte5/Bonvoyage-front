import { Component , OnInit , Input, EventEmitter } from '@angular/core';
import {InscritosService} from './inscritos.service'


declare var $: any;

@Component({
  selector: 'modal-inscritos',
  templateUrl: './inscritos.component.html',
  styleUrls: ['./inscritos.component.css'],
  providers: [InscritosService]
})
export class InscritosComponent implements OnInit{

  public inscritos: any;
  public evento: any;

  @Input('evento') set event(evento) {
    this.evento = evento;
    this.getInscritos()
  }
  constructor(
    private _service: InscritosService
  ) {
  this.evento = []
  }

  ngOnInit(){
   $('.modal').modal();
  }

  getInscritos() {
    this._service.getInscritos(this.evento.id_evento)
    .subscribe( result =>{
      this.inscritos  = result
    })
  }




}
