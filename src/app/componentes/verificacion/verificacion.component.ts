import { Component , OnInit , Input, EventEmitter } from '@angular/core';
import {VerificarService} from './verificacion.service'
import { Router } from '@angular/router'


declare var $: any;

@Component({
  selector: 'modal-verificar',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css'],
  providers: [VerificarService]
})
export class VerificarComponent implements OnInit{

  public verificado: any;
  public evento: any;
  public user:any;
  public error:any;


  constructor(
    private _service: VerificarService,
    private router: Router
  ) {

  }

  ngOnInit(){
   $('.modal').modal();

   this.user = localStorage.getItem('user')
   this.user = JSON.parse(this.user);
  }

  verificarViajero(form) {
    console.log(this.user.email)
    this._service.verificarViajero(form.password,this.user.email)
    .subscribe( result =>{
      if(result.nombre){
        this.error = '';
        this.abrirModal()
      }else{
        this.verificado=false
        this.error = 'Eres tu ?'
      }

    })
  }

  abrirModal() {
    $('#edicion').modal('open');
  }


}
