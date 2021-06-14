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



export const appRouters: Routes = [

  { path: 'membro', component: MembroComponent },
  { path: 'items', component: CardProductComponent }

];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);



@NgModule({
  declarations: [
    AppComponent,
    MembroComponent,
     CardProductComponent
    
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
