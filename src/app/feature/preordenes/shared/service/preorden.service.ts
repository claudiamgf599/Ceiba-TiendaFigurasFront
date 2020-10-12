import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Preorden } from '../model/preorden';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpService } from 'src/app/core/services/http-client';
import { environment } from 'src/environments/environment';
import { ComandoPreorden } from '../model/comando-preorden';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PreordenService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private comandoPreorden: ComandoPreorden = new ComandoPreorden();

  constructor(private http: HttpService) { }

  getPreordenes(idCliente: string): Observable<Preorden[]> {
    console.log('getPreordenes')
    console.log(`${environment.endpoint}preorden/listar/${idCliente}`);
    return this.http.doGet<Preorden[]>(`${environment.endpoint}preorden/listar/${idCliente}`);
  }

  create(idFigura: string, idCliente: string): Observable<Preorden> {
    console.log('PreordenService');
    console.log('idFigura ' + idFigura);
    console.log('idCliente ' + idCliente);
    this.comandoPreorden.idFigura = idFigura;
    this.comandoPreorden.idCliente = idCliente;
    return this.http.doPost<ComandoPreorden, Preorden>(`${environment.endpoint}preorden/generar`, this.comandoPreorden).pipe(
      catchError(e => {
        Swal.fire('Error al generar la preorden', e.error.message, 'error');
        return throwError(e);
      })
    );

  }

  delete(idPreorden: number): Observable<Preorden> {
    return this.http.doDelete<Preorden>(`${environment.endpoint}preorden/cancelar/${idPreorden}`).pipe(
      catchError(e => {
        Swal.fire('Error al cancelar la preorden', e.error.message, 'error');
        return throwError(e);
      })
    );
  }
}
