import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContentComponent } from './content/content.component';
import { CategoryBodaComponent } from './category-boda/category-boda.component';
import { CategoryBautizosComponent } from './category-bautizos/category-bautizos.component';
import { CategoryFuneralesComponent } from './category-funerales/category-funerales.component';
import { CategoryOtroComponent } from './category-otro/category-otro.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: ContentComponent},
  {path: 'sobreNosotros', component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'boda', component:CategoryBodaComponent},
  {path: 'boda', component:CategoryBodaComponent},
  {path: 'bautizos', component:CategoryBautizosComponent},
  {path: 'funerales', component:CategoryFuneralesComponent},
  {path: 'otros',component:CategoryOtroComponent}
//{path: 'homeCard', loadChildren: './content/card-home/card-home.module#CardHomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
