import { OfertaService } from './../oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  restaurantes : Oferta[];
  constructor(private oferaService : OfertaService) { }

  ngOnInit(): void {
    this.getOfertasRestaurantes()
  }

  getOfertasRestaurantes(): void {
    this.oferaService.getOferasByCategory('restaurante').subscribe(
      (data)=>{
        this.restaurantes = data
      },
      (httpFail)=>{
        console.log(httpFail);

      }
    )
  }
}
