import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID    } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { MembroComponent } from './membro/membro.component';
import { CadastrarMembroComponent } from './membro/cadastrar-membro/cadastrar-membro.component';
import { PrincipalComponent } from './principal/principal.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardProductComponent,
    CartComponent,
    MembroComponent,
    CadastrarMembroComponent,
    PrincipalComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
