import { Despesas } from "../entities/despesa";

export interface SqlHelperGateway {
  getDespesas(pageSize: number, pageIndex: number): Promise<Despesas[]>;
  getCountDespesas(): Promise<Despesas[]>;
  setDespesasSyncStatus(keys: number[], status : 0 | 1): Promise<void>;
}
