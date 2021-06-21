export class StatusPedidoEvolucao {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const { ID, CODPEDIDO, STATUSID, DATAHORASTATUS } = data;

    this.ID = ID;
    this.CODPEDIDO = CODPEDIDO;
    this.STATUSID = STATUSID;
    this.DATAHORASTATUS = DATAHORASTATUS;
  }

  public ID: number;
  public CODPEDIDO: number;
  public STATUSID: number;
  public DATAHORASTATUS: Date;
}
