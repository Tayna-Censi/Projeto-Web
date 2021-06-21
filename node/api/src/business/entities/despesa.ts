export class  Despesas {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const {
      ID,
      DESCRICAO,
      VALOR,
      TIPO,
    } = data;

    this.ID = ID;
    this.DESCRICAO = DESCRICAO;
    this.VALOR = VALOR;
    this.TIPO = TIPO;
  }

  public ID: number;
  public DESCRICAO: number;
  public VALOR: string;
  public TIPO: string;
}
