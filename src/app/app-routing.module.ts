import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MembroComponent } from './membro/membro.component';
import { CardProductComponent } from './card-product/card-product.component';

const routes: Routes = 
[
  { path: 'membro', component: MembroComponent },
  { path: 'items', component: CardProductComponent },


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }