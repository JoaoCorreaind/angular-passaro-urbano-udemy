import { Oferta } from './models/oferta.model';
import { Injectable } from '@angular/core';
import ItemCarrinho from './models/carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  public itens : ItemCarrinho[] = []
  constructor() { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens
  }
  public incluirItem(oferta: Oferta): void {
    let itemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor, 1
      )

    let findItem = this.itens.find((x)=> x.id ==oferta.id)
    if(findItem){
      findItem.quantidade += 1;
    }else{
      this.itens.push(itemCarrinho)
    }
  }

  totalValorCarrinho(): number {
    let total: number = 0
    this.itens.map((item) =>{
      total = total + (item.valor * item.quantidade)
    })
    return total
  }
  aumentarQuantidade(id : number){
    let findItem = this.itens.find(x=> x.id ==id);
    findItem.quantidade += 1
  }
  diminuirQuantidade(id : number){
    let findItem = this.itens.find(x=> x.id ==id);
    if(findItem){
      findItem.quantidade -= 1
      if(findItem.quantidade === 0){
        if(confirm("deseja remover o item?")){
          this.itens.splice(this.itens.indexOf(findItem) , 1)
        }
        findItem.quantidade = 1
      }
    }
  }
  limparCarrinho(): void {
    this.itens = []
  }
}
