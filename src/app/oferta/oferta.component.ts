import { CarrinhoService } from './../carrinho.service';
import { OfertaService } from './../oferta.service';
import { Oferta } from './../models/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
})
export class OfertaComponent implements OnInit {
  selectedOferta : Oferta;
  constructor(
    private route : ActivatedRoute,
    private ofertaService : OfertaService,
    private carrinhoService: CarrinhoService
    )
    { }

  ngOnInit(): void {
    console.log(this.carrinhoService.exibirItens());

    this.route.params.subscribe((params : Params) =>{
      this.ofertaService.find(params.id).subscribe(
        (oferta) => {
          this.selectedOferta = oferta
        },
        (httpError) => {
          console.log(httpError);

        })
    })
  }
  adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.selectedOferta)
    console.log(this.carrinhoService.exibirItens());

  }


}
