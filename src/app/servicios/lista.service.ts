import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class listaService {
  url: String = "http://localhost:4200/api/";  
  constructor(private http: HttpClient) { }


obtenerDatos(): Observable < any > {
  return this.http.get<any>(this.url + "persona");
}

}