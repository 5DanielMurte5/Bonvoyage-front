import { Component, OnInit , Input } from '@angular/core';
import  {Router} from '@angular/router'

declare var $:any;
@Component({
  selector: 'app-headerls',
  templateUrl: './headerls.component.html',
  styleUrls: ['./headerls.component.css']
})
export class HeaderlsComponent implements OnInit {
  title = 'BON VOYAGE';
  @Input('logued') logued : boolean;

   constructor(
     private router: Router
   ) {

   }

  ngOnInit() {
     $('.slider').slider();

  }

  logout() {
    localStorage.removeItem('user');
    this.logued = false;
    this.router.navigate(['ingresar'])
  }

}
