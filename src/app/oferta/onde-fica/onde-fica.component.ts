import { OfertaService } from './../../oferta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {
  id = this.route.parent.snapshot.params['id'];
  ondeFica : number;
  constructor(private route : ActivatedRoute, private ofertaService : OfertaService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params : Params) => {
      this.ofertaService.getOndeFica(this.id).subscribe(
        (data) => {
          this.ondeFica = data
        },
        (httpError) => {
          console.log(httpError);

        }
      )
    })
  }


}
