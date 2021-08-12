import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../models/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import ItemCarrinho from '../models/carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  idOrdemCompra = undefined
  itensCarrinho : ItemCarrinho[]
  valorCarrinho = this.carrinhoService.totalValorCarrinho()
  public formOrdem: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null, []),
    'formaPagamento': new FormControl(null, [Validators.required]),
  })
  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()

  }

  public confirmarCompra(): void {
    if(this.formOrdem.status === 'INVALID'){
      this.formOrdem.get('endereco').markAsTouched()
      this.formOrdem.get('numero').markAsTouched()
      this.formOrdem.get('complemento').markAsTouched()
      this.formOrdem.get('formaPagamento').markAsTouched()
    }else{
      if(this.itensCarrinho.length ===0){
        alert('Selecione itens para compra ,-,')
      }else{
        let pedido : Pedido = new Pedido(
          this.formOrdem.value.endereco,
          this.formOrdem.value.numero,
          this.formOrdem.value.formaPagamento,
          this.formOrdem.value.complemento,
          this.itensCarrinho,
        )
        this.ordemCompraService.efetivarCompra(pedido).subscribe(
          (data)=>{
            this.carrinhoService.limparCarrinho()
            this.idOrdemCompra = data.id
          },
          (httpError)=> {
            console.log(httpError);
          }
        )
      }
    }
  }
  aumentarQuantidadeCarrinho(id){
    this.carrinhoService.aumentarQuantidade(id)
    this.valorCarrinho = this.carrinhoService.totalValorCarrinho()
  }
  diminuirQuantidadeCarrinho(id){
    this.carrinhoService.diminuirQuantidade(id)
    this.valorCarrinho = this.carrinhoService.totalValorCarrinho()
  }
}
