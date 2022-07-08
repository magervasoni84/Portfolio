import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './component/contacto/contacto.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';


const routes: Routes = [
  {path:'Portfolio', component:PortfolioComponent, pathMatch:'full'},
  {path:'Contactos' ,component:ContactoComponent, pathMatch:'full'},
  
  {path:'', redirectTo:'Portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
