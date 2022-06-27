import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstudiosComponent } from './component/estudios/estudios.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { IniciarSessionComponent } from './component/iniciar-session/iniciar-session.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';
import { ContactoComponent } from './component/contacto/contacto.component';
import { SkillComponent } from './component/skill/skill.component';
import { AboutComponent } from './component/about/about.component';
import { VercontactosComponent } from './component/vercontactos/vercontactos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudiosComponent,
    ProyectosComponent,
    IniciarSessionComponent,
    PortfolioComponent,
    ContactoComponent,
    SkillComponent,
    AboutComponent,
    VercontactosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
