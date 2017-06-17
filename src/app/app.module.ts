import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderlsComponent } from './componentes/headerls/headerls.component';
import { ViajesComponent } from './componentes/viajes/viajes.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { CrearEComponent } from './componentes/Evento/evento.component';
import { MisEventosComponent } from './componentes/miseventos/miseventos.component';
import { InscritosComponent } from './componentes/inscritos/inscritos.component';
import { EditarComponent } from './componentes/editarevento/editarevento.component';
import { UserProfilComponent } from './componentes/userprofil/userprofil.component';
import { EditarPerfilComponent } from './componentes/editarperfil/editarperfil.component';
import { VerificarComponent } from './componentes/verificacion/verificacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderlsComponent,
    ViajesComponent,
    IngresarComponent,
    UsuariosComponent,
    PerfilComponent,
    RegistrarComponent,
    CrearEComponent,
    MisEventosComponent,
    InscritosComponent,
    EditarComponent,
    UserProfilComponent,
    EditarPerfilComponent,
    VerificarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
