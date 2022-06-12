import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSessionComponent } from './component/iniciar-session/iniciar-session.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

const routes: Routes = [
  {path:'Portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSessionComponent},
  {path:'',redirectTo:'Portfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
