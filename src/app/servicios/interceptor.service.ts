import { CurrencyPipe } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor{

  constructor(public autentService: AutenticacionService) { }
  

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    let tokReq = req;
    const token= this.autentService.getToken();
    if(token){
      tokReq = req.clone({ headers: req.headers.set('Authorization', token)});
    }
    console.log("Interceptos esta corriendo" + JSON.stringify(tokReq));
    return next.handle(tokReq);
  }
  
/*   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autentService.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      req = req.clone({setHeaders:{
      Authorization: 'Bearer $(currentUser.accessToken)'
    }})
  }
  console.log("Interceptos esta corriendo" + JSON.stringify(currentUser));
  return next.handle(req);}  */

}


export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}]