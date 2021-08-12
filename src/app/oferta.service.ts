import { URL_API, URL_COMO_USAR, URL_ONDE_FICA } from './app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from './models/oferta.model';
import { debounceTime, distinctUntilChanged, filter, map, pluck, retry, tap } from 'rxjs/operators';
const WAITNG_TIME = 300;

@Injectable({
  providedIn: 'root'
})

export class OfertaService {
  constructor(private http : HttpClient) { }

  public getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(`${URL_API}?destaque=true`);
  }
  public getOferasByCategory(catergoria : string) : Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${URL_API}?categoria=${catergoria}`);
  }
  public find(id : number) : Observable<Oferta>{
    return this.http.get<Oferta>(`${URL_API}/${id}`);
  }
  public getComoUsar(id : number): Observable<any>{
    return this.http.get<any>(`${URL_COMO_USAR}/${id}`).pipe(
      map(dados=> {
        return dados.descricao
      })

    )
  }
  public getOndeFica(id : number): Observable<any>{
    return this.http.get<any>(`${URL_ONDE_FICA}/${id}`).pipe(
      pluck('descricao') //retorna um campo especifico do objeto
    )
  }
  public pesquisaOfertas(termo : string): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${URL_API}?descricao_oferta_like=${termo}`).pipe(
    );
  }
}
