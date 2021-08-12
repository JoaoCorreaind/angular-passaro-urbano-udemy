import { OfertaService } from './../../oferta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {
  id = this.route.parent.snapshot.params['id'];
  comoUsar : string;
  constructor(private route : ActivatedRoute, private ofertaService : OfertaService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params)=>{
      this.ofertaService.getComoUsar(params.id).subscribe(
        (data) => {
          console.log(data);

          this.comoUsar = data
        },
        (httpError) => {
          console.log(httpError);
        }
      )
    })
  }

}
