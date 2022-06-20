import { Component, OnInit } from '@angular/core';
import { contacto } from 'src/app/model/contacto.model';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto: contacto =new contacto("","","");

  constructor(public contactoService: ContactoService) { }

  ngOnInit(): void {
  }

}
