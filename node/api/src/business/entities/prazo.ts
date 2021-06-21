export class Prazo {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const { NROEMPRESA, CODPRAZO, S_DESCRICAO, D_PERCENTUAL_AJUSTE } = data;

    this.NROEMPRESA = NROEMPRESA;
    this.CODPRAZO = CODPRAZO;
    this.S_DESCRICAO = S_DESCRICAO;
    this.D_PERCENTUAL_AJUSTE = Number.parseFloat(D_PERCENTUAL_AJUSTE).toFixed(4).toString();
  }

  public NROEMPRESA: number;
  public CODPRAZO: number;
  public S_DESCRICAO: string;
  public D_PERCENTUAL_AJUSTE: string;
}

export class PrazoKey {
  public NROEMPRESA: number;
  public CODPRAZO: number;
}