import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contacto } from '../model/contacto.model';


@Injectable({
  providedIn: 'root'
})

export class ContactoService {
  URL = 'http://localhost:8080/api/contacto';

  constructor(private http: HttpClient) { }

  public getContacto(): Observable<contacto>{
    return this.http.get<contacto>(this.URL+'/ver');
  }
  
  /* public crearContacto(): Observable<contacto>{
    return this.http.post<contacto>(this.URL+'/new', 'nombre', 'email', 'texto');
  } */
}
