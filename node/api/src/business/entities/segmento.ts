export class Segmento {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const { NROSEGMENTO, DESCSEGMENTO } = data;

    this.NROSEGMENTO = NROSEGMENTO;
    this.DESCSEGMENTO = DESCSEGMENTO;
  }

  public NROSEGMENTO: number;
  public DESCSEGMENTO: string;
}
