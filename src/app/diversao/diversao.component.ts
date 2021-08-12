import { OfertaService } from './../oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {
  ofertas : Oferta[]
  constructor(private ofertaService : OfertaService) { }

  ngOnInit(): void {
    this.getOfertasByCategory()
  }

  getOfertasByCategory(): void {
    this.ofertaService.getOferasByCategory('diversao').subscribe(
      (data)=>{
        this.ofertas = data
      },
      (httpError)=>{
        console.log(httpError);
      }
    )
  }
}
