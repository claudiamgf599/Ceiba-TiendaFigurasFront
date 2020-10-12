import { Injectable } from '@angular/core';
import { Figura } from '../model/figura';
import { FIGURAS } from '../model/figuras.json';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpService } from 'src/app/core/services/http-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiguraService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpService) { }

  getFiguras(): Observable<Figura[]> {
    return this.http.doGet<Figura[]>(`${environment.endpoint}figuras/disponibles`);
  }


}
