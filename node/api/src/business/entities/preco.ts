export class Preco {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const { NROEMPRESA, SEQPESSOA, SEQPRODUTO, PRECO } = data;

    this.NROEMPRESA = NROEMPRESA;
    this.SEQPESSOA = SEQPESSOA;
    this.SEQPRODUTO = SEQPRODUTO;
    this.PRECO = PRECO.toString();
  }

  public NROEMPRESA: number;
  public SEQPESSOA: number;
  public SEQPRODUTO: number;
  public PRECO: number;
}

export class PrecoKey {
  public NROEMPRESA: number;
  public SEQPESSOA: number;
  public SEQPRODUTO: number;
}