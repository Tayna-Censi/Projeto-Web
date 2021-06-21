export class Pedido {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const {
      ID,
      CODPEDIDO,
      CODPEDIDOSELLER,
      MARKETPLACEID,
      NROSEGMENTO,
      CODCLIENTE,
      DATAPEDIDO,
      VALORPEDIDO,
      STATUS,
      CODIGOCONDPGTO,
      INDLIBERADO,
      DATAPEDIDOINTEGRA,
    } = data;

    this.ID = ID;
    this.CODPEDIDO = CODPEDIDO;
    this.CODPEDIDOSELLER = CODPEDIDOSELLER;
    this.MARKETPLACEID = MARKETPLACEID;
    this.NROSEGMENTO = NROSEGMENTO;
    this.CODCLIENTE = CODCLIENTE;
    this.DATAPEDIDO = DATAPEDIDO;
    this.VALORPEDIDO = Number.parseFloat(VALORPEDIDO);
    this.STATUS = STATUS;
    this.CODIGOCONDPAGTO = CODIGOCONDPGTO;
    this.INDLIBERADO = INDLIBERADO;
    this.DATAPEDIDOINTEGRA = DATAPEDIDOINTEGRA;
  }

  public ID: number;
  public CODPEDIDO: number;
  public CODPEDIDOSELLER: number;
  public MARKETPLACEID: number;
  public NROSEGMENTO: number;
  public CODCLIENTE: number;
  public DATAPEDIDO: Date;
  private VALORPEDIDO: number;
  public STATUS: number;
  public CODIGOCONDPAGTO: number;
  public INDLIBERADO: number;
  public DATAPEDIDOINTEGRA: Date;

  // get VALORPEDIDO(): number {
  //   return Number.parseFloat(this._VALORPEDIDO);
  // }

  // set VALORPEDIDO(value:number) {
  //   this._VALORPEDIDO = value;
  // }

}
