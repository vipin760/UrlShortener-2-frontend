import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserInterceptorService implements HttpInterceptor{

    constructor(){}
    intercept(_req: HttpRequest<any>, _next: HttpHandler): Observable<HttpEvent<any>> {
        let jwttoken = _req.clone({
            setHeaders:{
                'Access-Control-Allow-Origin':'Http://localhost:3000'
            }
        })
        return _next.handle(jwttoken)
    } 
}