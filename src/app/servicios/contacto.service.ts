import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from '../model/contacto.model';


@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  constructor(private http: HttpClient) { }

  private  apiServerUrl=environment.apiBaseUrl;

    public getContacto():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(`${this.apiServerUrl}/api/contacto/all`); 
    }

    public addContacto(contacto: Contacto):Observable<Contacto>{
      return this.http.post<Contacto>(`${this.apiServerUrl}/api/contacto/add`, contacto); 
    }

    public updateContacto(contacto: Contacto):Observable<Contacto>{
    return this.http.put<Contacto>(`${this.apiServerUrl}/api/contacto/update`, contacto);
    }

    public deleteContacto(contactoId: number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/api/contacto/delete/${contactoId}`); 
    }
}
