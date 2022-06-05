import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";

@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html',
  styleUrls: ['./iniciar-session.component.css']
})
export class IniciarSessionComponent implements OnInit {
  Form:FormGroup;
  constructor(private FormBuilder:FormBuilder) { 
    this.Form = this.FormBuilder.group({
      
    })
  }

  ngOnInit(): void {
  }

}
