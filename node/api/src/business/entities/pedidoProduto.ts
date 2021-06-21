export class PedidoProduto {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const { ID, CODPEDIDO, CODPRODUTO, QTDSOLICITADA, QTDATENDIDA, PRECOUNITARIO, PRECOTOTAL, QTD_EMBVENDA } = data;

    this.ID = ID;
    this.CODPEDIDO = CODPEDIDO;
    this.CODPRODUTO = CODPRODUTO;
    this.QTDSOLICITADA = QTDSOLICITADA;
    this.QTDATENDIDA = QTDATENDIDA;
    this.PRECOUNITARIO = PRECOUNITARIO;
    this.PRECOTOTAL = PRECOTOTAL;
    this.QTD_EMBVENDA = QTD_EMBVENDA;
  }

  public ID: number;
  public CODPEDIDO: number;
  public CODPRODUTO: number;
  public QTDSOLICITADA: number;
  public QTDATENDIDA: number;
  public PRECOUNITARIO: number;
  public PRECOTOTAL: number;
  public QTD_EMBVENDA: number;
}

export class PedidoProdutoKey {
  public CODPEDIDO: number;
  public CODPRODUTO: number;
}
