import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  url!:"http://localhost:4200/api/auth/login";
  currentUserSubject:BehaviorSubject<any>;
  constructor(private http:HttpClient){
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }


  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>
      {sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;}
    ))}


    get UsuarioAutenticado(){
      return this.currentUserSubject.value;
    }
  }