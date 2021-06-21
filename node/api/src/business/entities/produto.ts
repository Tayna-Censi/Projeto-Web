export class Produto {
  constructor(data: any = null) {
    if (!data) {
      return;
    }

    const {
      CODIGO,
      MARKETPLACEID,
      STOREID,
      NROSEGMENTO,
      SEQFAMILIA,
      SKU,
      EAN,
      NOME,
      ECMNOME,
      DESCRICAOBREVE,
      DESCRICAO,
      MULTIPLOS,
      SITUACAO,
      ESTOQUE,
      PRECOBASE,
      PRECO,
      DEPARTAMENTO,
      SECAO,
      CATEGORIA,
      MARCA,
      FORNECEDOR,
      TAGS,
      IMAGENS,
      QTD_EMBVENDA,
      DESC_EMBVENDA,
    } = data;

    this.CODIGO = CODIGO.toString();
    this.MARKETPLACEID = MARKETPLACEID;
    this.STOREID = STOREID;
    this.NROSEGMENTO = NROSEGMENTO;
    this.SEQFAMILIA = SEQFAMILIA.toString();
    this.SKU = SKU.toString();
    this.EAN = EAN !== null ? EAN.toString() : '';
    this.NOME = NOME;
    this.ECMNOME = ECMNOME;
    this.DESCRICAOBREVE = DESCRICAOBREVE;
    this.DESCRICAO = DESCRICAO;
    this.MULTIPLOS = MULTIPLOS;
    this.SITUACAO = SITUACAO;
    this.ESTOQUE = ESTOQUE.toString();
    this.PRECOBASE = Number.parseFloat(PRECOBASE).toFixed(2).toString();
    this.PRECO = Number.parseFloat(PRECO).toFixed(2).toString();
    this.DEPARTAMENTO = DEPARTAMENTO;
    this.SECAO = SECAO;
    this.CATEGORIA = CATEGORIA;
    this.MARCA = MARCA;
    this.FORNECEDOR = FORNECEDOR;
    this.TAGS = TAGS;
    this.IMAGENS = IMAGENS;
    this.QTD_EMBVENDA = QTD_EMBVENDA;
    this.DESC_EMBVENDA = DESC_EMBVENDA;
  }

  public CODIGO: string;
  public MARKETPLACEID: number;
  public STOREID: number;
  public NROSEGMENTO: number;
  public SEQFAMILIA: string;
  public SKU: string;
  public EAN: string;
  public NOME: string;
  public ECMNOME: string;
  public DESCRICAOBREVE: string;
  public DESCRICAO: string;
  public MULTIPLOS: number;
  public SITUACAO: number;
  public ESTOQUE: string;
  public PRECOBASE: string;
  public PRECO: string;
  public DEPARTAMENTO: string;
  public SECAO: string;
  public CATEGORIA: string;
  public MARCA: string;
  public FORNECEDOR: string;
  public TAGS: string;
  public IMAGENS: string;
  public QTD_EMBVENDA: number;
  public DESC_EMBVENDA: string;
}

export class ProductKey {
  public MARKETPLACEID: number;
  public STOREID: number;
  public SKU: string;
}