export default class ItemCarrinho {
  id : number;
  img : object;
  titulo : string;
  descricao_oferta : string;
  valor : number;
  quantidade : number;
  constructor(id: number, img: object, titulo: string, descricao_oferta: string, valor: number, quantidade: number) {
    this.id = id;
    this.img = img;
    this.titulo = titulo;
    this.descricao_oferta = descricao_oferta;
    this.valor = valor;
    this.quantidade = quantidade;
  }

}
