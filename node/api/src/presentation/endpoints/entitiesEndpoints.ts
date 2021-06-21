import { Response } from 'express';
import { SqlHelper } from '../../data/sqlHelperDB';
import { PublicRequest } from 'app-request';
import { FailureMsgResponse, SuccessMsgResponse, SuccessResponse } from '../../core/ApiResponse';
import asyncHandler from '../../helpers/asyncHandler';
import { any } from '@hapi/joi';


const getAllDespesas = asyncHandler(async (req: PublicRequest, res: Response) => {
  const sqlHelper = new SqlHelper();
  const pageSize = req.query.pageSize || 20;
  const pageIndex = req.query.pageIndex || 0;
  const despesas =  await sqlHelper.getDespesas(Number(pageSize), Number(pageIndex));
  const totalRecords = await sqlHelper.getCountDespesas();

  const records = despesas.map((cliente) => {
    return cliente;
  })  

  new SuccessResponse('Success', {totalRecords, records}).send(res);
});

const setDespesasAsSynced = asyncHandler(async (req: PublicRequest, res: Response) => {
  const sqlHelper = new SqlHelper();
  const { clienteKeys } = req.body
  
  await sqlHelper.setDespesasSyncStatus(clienteKeys, 1)
  new SuccessMsgResponse('Success').send(res);
});

export const EntitiesEndpoints = {
  getAllDespesas,
  setDespesasAsSynced
};