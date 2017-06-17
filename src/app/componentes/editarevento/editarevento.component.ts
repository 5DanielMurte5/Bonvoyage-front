import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {EditarService } from './editarevento.service'
import { Router , ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editarevento',
  templateUrl: './editarevento.component.html',
  styleUrls: ['./editarevento.component.css'],
  providers: [EditarService],

})
export class EditarComponent implements OnInit {
  public error: any;
  public user:any;
  public evento: any;



  constructor(
    private _service: EditarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
 this.evento = []
  }

  ngOnInit() {
    if(!localStorage.getItem('user')) {
     this.router.navigate(['ingresar'])
    } else {
     this.user = localStorage.getItem('user')
     this.user = JSON.parse(this.user);
  }

  this.route.params.subscribe(params => {
    this._service.getEvento(params.id_evento)
    .subscribe( result => {
     this.evento = result
    if(this.evento.creador===this.user.id_viajero){
        console.log("es creador")
    }else{
      this.router.navigate(['perfil'])
    }

  })

})
}


  editarEvento(form) {
    this._service.editarEvento(form.nombre, form.fecha,form.lugar ,form.descripcion, form.participantes , this.evento.creador, this.evento.id_evento)
    .subscribe(
      result => {
        if(result.success) {
          this.error = '';
          this.router.navigate(['miseventos'])
        } else {
          this.error = 'Error al editar el evento '
        }
      },
    )
  }


}
