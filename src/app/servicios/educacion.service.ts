import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})

export class EducacionService {
    private  apiServerUrl=environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEduc():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`); 
    }

    public addEduc(educacion: Educacion):Observable<Educacion>{
      return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/add`, educacion); 
    }

    public updateEduc(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update`, educacion);
    }

    public deleteEduc(educacionId: number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${educacionId}`); 
    }
}





  

  
