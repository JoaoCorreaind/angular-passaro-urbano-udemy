import { Oferta } from './../models/oferta.model';
import { Observable, of, Subject } from 'rxjs';
import { OfertaService } from './../oferta.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter , switchMap, tap, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']

})
export class TopoComponent implements OnInit {
  ofertas : Observable<Oferta[]>
  ofertaInput = new FormControl()
  private subject : Subject<string> = new Subject<string>()
  constructor(
    private ofertaService : OfertaService,
    public router : Router
    ) { }

  ngOnInit() {
    this.getOfertasByDescription();

  }

  oferta$$ = this.ofertaInput.valueChanges.subscribe(
    (value)=>  this.pesquisa(value))

  pesquisa(value : string): void {
    this.subject.next(value)
  }

  getOfertasByDescription(){
    this.ofertas = this.subject.pipe(
      debounceTime(500),

      distinctUntilChanged(),
      tap(valor=> console.log(`Buscar por ${valor}`)) ,
      switchMap(value => {
        if(value.trim() === ''){
          return of([])
        }
        return this.ofertaService.pesquisaOfertas(value)
      }),
    )
  }
  cleanInput(){
    this.ofertaInput.reset()
    this.subject.next('')
  }




}
