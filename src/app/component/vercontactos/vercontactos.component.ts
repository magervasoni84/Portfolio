import { Component, OnInit } from '@angular/core';
import { contacto } from 'src/app/model/contacto.model';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-vercontactos',
  templateUrl: './vercontactos.component.html',
  styleUrls: ['./vercontactos.component.css']
})
export class VercontactosComponent implements OnInit {
  contacto: contacto =new contacto("","","");

  constructor(public contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactoService.getContacto().subscribe(data => {this.contacto = data})
  }

}
