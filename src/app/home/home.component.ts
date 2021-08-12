import { Oferta } from './../models/oferta.model';
import { OfertaService } from '../oferta.service'
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {
  ofertas : Oferta[];
  constructor(private ofertaService : OfertaService) { }
  ngOnInit() {
    this.getOfertas()
  }

  getOfertas(): void {
    this.ofertaService.getOfertas().subscribe(
      (data)=>{
        this.ofertas = data
      }
    )
  }
}
