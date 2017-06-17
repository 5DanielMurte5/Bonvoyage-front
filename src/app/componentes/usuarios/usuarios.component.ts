import { Component , OnInit , Output, EventEmitter } from '@angular/core';
import {UsuariosService} from './usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit{

  public usuarios: any;


  constructor(
    private _service: UsuariosService
  ) {

  }

  ngOnInit(){

    this.getUsuarios()
  }

  getUsuarios() {
    this._service.getUsuarios()
    .subscribe( result =>{
      this.usuarios  = result
      console.log(result)
    })
  }




}
