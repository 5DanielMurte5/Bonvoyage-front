import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViajesComponent } from './componentes/viajes/viajes.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { CrearEComponent } from './componentes/Evento/evento.component';
import { MisEventosComponent } from './componentes/miseventos/miseventos.component';
import { EditarComponent } from './componentes/editarevento/editarevento.component';
import { UserProfilComponent } from './componentes/userprofil/userprofil.component';






const routes: Routes = [
  {path: '', component: ViajesComponent },
  {path: 'ingresar', component: IngresarComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'registrarse', component: RegistrarComponent},
  {path: 'crear/evento', component: CrearEComponent},
  {path: 'miseventos', component: MisEventosComponent},
  {path: 'miseventos/editar/:id_evento', component: EditarComponent},
  {path: 'usuarios/viajero/:id_viajero', component: UserProfilComponent}




]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}
