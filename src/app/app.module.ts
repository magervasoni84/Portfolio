import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Bootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './component/body/body.component';
import { ExpLabComponent } from './component/exp-lab/exp-lab.component';
import { EstudiosComponent } from './component/estudios/estudios.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { IniciarSessionComponent } from './component/iniciar-session/iniciar-session.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    FooterComponent,
    BodyComponent,
    ExpLabComponent,
    EstudiosComponent,
    ProyectosComponent,
    IniciarSessionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
