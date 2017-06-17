import { Component, OnInit } from '@angular/core';
import {IngresarService } from './ingresar.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
  providers: [IngresarService]
})
export class IngresarComponent implements OnInit {
  title = 'BON VOYAGE';
  public error: any;


  constructor(
    private _service: IngresarService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }


  ingresarViajero(form) {
    this._service.ingresarViajero(form.email , form.password)
    .subscribe(
      result => {
        if(result.nombre) {
          this.error = '';
          localStorage.setItem('user', JSON.stringify(result))
          this.router.navigate(['perfil'])
          location.reload()
        } else {
          this.error = 'Credenciales incorrectas'
        }

      },
    )
  }

  }
