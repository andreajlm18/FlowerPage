import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SpinerComponent } from './spiner/spiner.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardMoreComponent } from './card-more/card-more.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CategoryBodaComponent } from './category-boda/category-boda.component';
import { CategoryBautizosComponent } from './category-bautizos/category-bautizos.component';
import { CategoryFuneralesComponent } from './category-funerales/category-funerales.component';
import { CategoryOtroComponent } from './category-otro/category-otro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    ContactoComponent,
    SobreNosotrosComponent,
    SpinerComponent,
    CardHomeComponent,
    CardMoreComponent,
    CarruselComponent,
    CategoryBodaComponent,
    CategoryBautizosComponent,
    CategoryFuneralesComponent,
    CategoryOtroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
