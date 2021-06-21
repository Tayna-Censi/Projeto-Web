import Joi, { number } from '@hapi/joi';

const insertPedidoProdutoSchema = Joi.object().keys({
  CODPRODUTO: Joi.number().required(),
  QTDSOLICITADA: Joi.number().required(),
  QTDATENDIDA: Joi.number().optional().allow(null),
  PRECOUNITARIO: Joi.number().required(),
  PRECOTOTAL: Joi.number().required(),
  QTD_EMBVENDA: Joi.number().optional().allow(null),
});

const productKey = Joi.object().keys({
  MARKETPLACEID: Joi.number().required(),
  STOREID: Joi.number().required(),
  SKU: Joi.string().required(),
})

const prazoKey = Joi.object().keys({
  NROEMPRESA: Joi.number().required(),
  CODPRAZO: Joi.number().required(),
})

const prazoClienteKey = Joi.object().keys({
  NROEMPRESA: Joi.number().required(),
  CODPRAZO: Joi.number().required(),
  SEQPESSOA: Joi.number().required(),
})

const precoKey = Joi.object().keys({
  NROEMPRESA: Joi.number().required(),
  SEQPESSOA: Joi.number().required(),
  SEQPRODUTO: Joi.number().required(),
})

const pedidoProdutoKey = Joi.object().keys({
  CODPEDIDO: Joi.number().required(),
  CODPRODUTO: Joi.number().required(),
})

export default {
  getAllList: Joi.object().keys({
    pageIndex: Joi.number().optional(),
    pageSize: Joi.number().optional(),
  }),
  insertPedidoSchema: Joi.object().keys({
    ID: Joi.number().required(),
    CODPEDIDO: Joi.number().required(),
    MARKETPLACEID: Joi.number().required(),
    NROSEGMENTO: Joi.number().required(),
    CODCLIENTE: Joi.number().required(),
    DATAPEDIDO: Joi.date().required(),
    VALORPEDIDO: Joi.number().required(),
    STATUS: Joi.number().required(),
    CODIGOCONDPGTO: Joi.number().required(),
    INDLIBERADO: Joi.number().required(),
    DATAPEDIDOINTEGRA: Joi.date().optional().allow(null),
    PRODUTOS: Joi.array().items(insertPedidoProdutoSchema).required()
  }),
  updateProdutoSynced: Joi.object().keys({
    productKeys: Joi.array().items(productKey).required(),
  }),
  updateClienteSynced: Joi.object().keys({
    clienteKeys: Joi.array().items(Joi.number()).required(),
  }),
  updatePrazoSynced: Joi.object().keys({
    prazoKeys: Joi.array().items(prazoKey).required(),
  }),
  updatePrazoClienteSynced: Joi.object().keys({
    prazoClienteKeys: Joi.array().items(prazoClienteKey).required(),
  }),
  updatePrecoSynced: Joi.object().keys({
    precoKeys: Joi.array().items(precoKey).required(),
  }),
  updateSegmentoSynced: Joi.object().keys({
    segmentoKeys: Joi.array().items(Joi.number()).required(),
  }),
  updateStatusPedidoSynced: Joi.object().keys({
    statusPedidoKeys: Joi.array().items(Joi.number()).required(),
  }),
  updateStatusPedidoEvolucaoSynced: Joi.object().keys({
    statusPedidoEvolucaoKeys: Joi.array().items(Joi.number()).required(),
  }),
  updatePedidoSynced: Joi.object().keys({
    pedidoKeys: Joi.array().items(Joi.number()).required(),
  }),
  updatePedidoProdutoSynced: Joi.object().keys({
    pedidoProdutoKeys: Joi.array().items(pedidoProdutoKey).required(),
  }),
};
