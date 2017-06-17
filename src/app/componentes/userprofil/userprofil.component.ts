import { Component, OnInit } from '@angular/core';
import { UserProfilService } from './userprofil.service'
import { Router , ActivatedRoute   } from '@angular/router'

declare var Materialize: any;

@Component({
  selector: 'app-userprofil',
  templateUrl: './userprofil.component.html',
  styleUrls: ['./userprofil.component.css'],
  providers: [UserProfilService]
})

export class UserProfilComponent implements OnInit{
  public eventos: any;
  public viajes: any;
  public user: any;
  public viajero:any;
  public usereventos: any;



  constructor(
    private _service: UserProfilService,
    private router : Router,
    private route: ActivatedRoute

  ) {
  this.user = []
  this.viajero = [];
  }

  ngOnInit(){
  if(!localStorage.getItem('user')) {
   this.router.navigate(['ingresar'])
  } else {
   this.user = localStorage.getItem('user')
   this.user = JSON.parse(this.user);
}

this.route.params.subscribe(params => {
  this._service.getViajero(params.id_viajero)
  .subscribe(
     result => {
    this.viajero = result[0]
    this.getViajes(this.viajero.id_viajero)
    this.getEventos(this.viajero.id_viajero)
    this.getEventosU(this.user.id_viajero)
  })})


  }

    getViajes(id_viajero) {
    this._service.getViajes(id_viajero)
    .subscribe( result =>{
      this.viajes  = result
    })
  }

  getEventosU(id_viajero) {
    this._service.getEventosU(id_viajero)
    .subscribe( result =>{
      this.eventos  = result
    })
  }
  getEventos(id_viajero) {
    this._service.getEventos(id_viajero)
    .subscribe( result =>{
      this.usereventos  = result
    })
  }

  inscribirEvento(id_evento) {
    this._service.inscribirEvento(id_evento, this.user.id_viajero)
    .subscribe( result =>{
       if(result.success) {
           Materialize.toast('Estas inscrito !', 4000)
       } else {

          Materialize.toast(result.error_message, 4000)
       }
    })


  }





}
