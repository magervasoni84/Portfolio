import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html',
  styleUrls: ['./iniciar-session.component.css']
})
export class IniciarSessionComponent implements OnInit {
  Form:FormGroup;
  constructor(private FormBuilder:FormBuilder, private autenticacionService:AutenticacionService, private rutas:Router) { 
    this.Form = this.FormBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      deviceId:["1786788768"],
      deviceType:["DEVICE_TYPE_ANDROID"],
      NotificationToken:["6765757Seececc34"]
    })
  }

  ngOnInit(): void {
  }





get Email(){
  return this.Form.get('email');
}

get Password(){
  return this.Form.get('password');
}


onEnviar(event:Event){
  event.preventDefault;
  this.autenticacionService.IniciarSesion(this.Form.value).subscribe(data=>{
    console.log("DATA:"+JSON.stringify(data));
    this.rutas.navigate(['/portofolio'])
    })
  }
}