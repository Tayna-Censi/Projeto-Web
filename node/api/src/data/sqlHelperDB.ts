import knex from 'knex';
import { SqlHelperGateway } from '../business/gateways/sqlHelperGateway';
import { TableNamesPostgreSql } from './baseDB';
import { Despesas } from '../business/entities/despesa';
import { Pedido } from '../business/entities/pedido';
import { PedidoProduto, PedidoProdutoKey } from '../business/entities/pedidoProduto';
import { Prazo, PrazoKey } from '../business/entities/prazo';
import { PrazoCliente, PrazoClienteKey } from '../business/entities/prazoCliente';
import { Preco, PrecoKey } from '../business/entities/preco';
import { Segmento } from '../business/entities/segmento';
import { StatusPedido } from '../business/entities/statusPedido';
import { StatusPedidoEvolucao } from '../business/entities/statusPedidoEvolucao';
import { postgreSqlConnection } from '../config';
import { date } from '@hapi/joi';

export class SqlHelper implements SqlHelperGateway {
  
  

  public async getDespesas(pageSize: number, pageIndex: number): Promise<Despesas[]> {
    const offset = pageIndex * pageSize;
    // Open Connection
    const connection = knex({client: 'pg', connection: postgreSqlConnection});

    const despesas = await connection(TableNamesPostgreSql.Clientes)
      .where({ SYNCED: 0, ISDELETED: 0 })
      .select(
        'ID',
        'DESCRICAO',
        'VALOR',
        'TIPO',
      )
      .offset(offset)
      .limit(pageSize);

    // Close Connection
    await connection.destroy();
    return despesas;
  }

  public async getCountDespesas(): Promise<Despesas[]> {
    // Open Connection
    const connection = knex({client: 'pg', connection: postgreSqlConnection});
    const despesas = await connection(TableNamesPostgreSql.Clientes)
      .where({ SYNCED: 0,  ISDELETED: 0 })
      .count({count: '*'});
    
    // Close Connection
    await connection.destroy();
    return despesas;
  }

  public async setDespesasSyncStatus(keys: number[], status: 0 | 1): Promise<void> {
    const connection = knex({client: 'pg', connection: postgreSqlConnection});
    await connection.transaction((trx: any) => {
      const queries: any[] = [];
      keys.forEach((ID: number) => {
        const query = connection(TableNamesPostgreSql.Clientes)
          .where({ ID })
          .update({ SYNCED: status})
          .transacting(trx);
        queries.push(query);
      });

      Promise.all(queries).then(trx.commit).catch(trx.rollback);
    });
    await connection.destroy();
  }

  
}
