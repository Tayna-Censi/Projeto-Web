export class StatusPedido {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const { ID, NOME } = data;

    this.ID = ID;
    this.NOME = NOME;
  }

  public ID: number;
  public NOME: string;
}
