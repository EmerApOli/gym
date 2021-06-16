import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ModuleWithProviders    } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { MembroComponent } from './membro/membro.component';
import { CadastrarMembroComponent } from './membro/cadastrar-membro/cadastrar-membro.component';
import { PrincipalComponent } from './principal/principal.component'
import { AppRoutingModule } from './app-routing.module';
import { AgendartreinoComponent } from './agendartreino/agendartreino.component';
import { CadAgendatreinoComponent } from './agendartreino/cad-agendatreino/cad-agendatreino.component';




export const appRouters: Routes = [

  { path: 'membro', component: MembroComponent },
  { path: 'items', component: CardProductComponent },
  { path: 'agendartreino', component: AgendartreinoComponent },
  { path: 'principal', component: PrincipalComponent },
   {path: 'cadagendatreino', component: CadAgendatreinoComponent }

];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);



@NgModule({
  declarations: [
    AppComponent,
    MembroComponent,
     CardProductComponent,
     AgendartreinoComponent,
     PrincipalComponent,
     CadAgendatreinoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot([]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
