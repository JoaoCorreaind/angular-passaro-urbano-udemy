import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";


import { Pedido } from "./models/pedido.model";
import {URL_API} from './app.api'
import { HttpClient } from "@angular/common/http";


@Injectable()
export class OrdemCompraService {
    constructor(private http: HttpClient){}

    public efetivarCompra(pedido: Pedido): Observable<Pedido> {
        let headers: Headers = new Headers()

        headers.append('Content-type', 'application/json')
        return this.http.post<Pedido>(`http://localhost:3000/pedidos`, pedido)

    }
}
