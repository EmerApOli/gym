import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MembroComponent } from './membro/membro.component';
import { CardProductComponent } from './card-product/card-product.component';
import { AgendarTreino } from './agendartreino/agendartreino.module';
import { AgendartreinoComponent } from './agendartreino/agendartreino.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadAgendatreinoComponent } from './agendartreino/cad-agendatreino/cad-agendatreino.component';

const routes: Routes = 
[
  { path: 'membro', component: MembroComponent },
  { path: 'items', component: CardProductComponent },
  { path: 'agendartreino', component: AgendartreinoComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'cadagendartreino', component: CadAgendatreinoComponent }



]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }