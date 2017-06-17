import { Component, OnInit } from '@angular/core';
import {RegistrarService } from './registrar.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [RegistrarService],

})
export class RegistrarComponent implements OnInit {
  title = 'BON VOYAGE';
  public error: any;


  constructor(
    private _service: RegistrarService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }


  registrarViajero(form) {
    this._service.registrarViajero(form.nombre, form.documento, form.edad, form.sexo, form.email, form.password)
    .subscribe(
      result => {
        if(result.nombre) {
          this.error = '';
          localStorage.setItem('user', JSON.stringify(result))
          this.router.navigate(['perfil'])
          location.reload()
        } else {
          this.error = 'Error al Registrarse'
        }
      }
    )
  }


  }
