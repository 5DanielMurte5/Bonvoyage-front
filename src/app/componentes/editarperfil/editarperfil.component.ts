import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {EditarPerfilService } from './editarperfil.service'
import { Router , ActivatedRoute } from '@angular/router'
declare var $: any;

@Component({
  selector: 'modal-edicion',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css'],
  providers: [EditarPerfilService],

})
export class EditarPerfilComponent implements OnInit {
  public error: any;
  public user:any;
  public evento: any;



  constructor(
    private _service: EditarPerfilService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    $('.modal').modal();
    if(!localStorage.getItem('user')) {
     this.router.navigate(['ingresar'])
    } else {
     this.user = localStorage.getItem('user')
     this.user = JSON.parse(this.user);
  }


}


  editarPerfil(form) {
    this._service.editarPerfil(form.nombre, form.documento,form.edad ,form.sexo, form.email ,form.password,this.user.id_viajero)
    .subscribe(
      result => {
        if(result.nombre) {
          this.error = '';
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(result))
            location.reload()
        } else {
          this.error = 'Error al editar tu perfil '
        }
      },
    )
  }


}
