export class PrazoCliente {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const { NROEMPRESA, SEQPESSOA, CODPRAZO, DESCRICAO } = data;

    this.NROEMPRESA = NROEMPRESA;
    this.SEQPESSOA = SEQPESSOA.toString();
    this.CODPRAZO = CODPRAZO;
    this.DESCRICAO = DESCRICAO;
  }

  public NROEMPRESA: number;
  public SEQPESSOA: number;
  public CODPRAZO: number;
  public DESCRICAO: string;
}

export class PrazoClienteKey {
  public NROEMPRESA: number;
  public SEQPESSOA: number;
  public CODPRAZO: number;
}