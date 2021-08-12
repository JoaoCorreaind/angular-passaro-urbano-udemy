import ItemCarrinho from './carrinho.model';
export class Pedido {
  id: number;
    constructor(
        public endereco: string,
        public numero: string,
        public complemento: string,
        public formaPagamento: string,
        public itens : ItemCarrinho[]
    ){}
}
