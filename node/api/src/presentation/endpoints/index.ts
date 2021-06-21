import express from 'express';
import apikey from '../middlewares/apiKey';
import validator, { ValidationSource } from '../../helpers/validator';
import schemas from './schema';
import { EntitiesEndpoints } from './entitiesEndpoints';
const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
router.use('/', apikey);
/*-------------------------------------------------------------------------*/


router.get(
  '/despesa',
  validator(schemas.getAllList, ValidationSource.QUERY),
  EntitiesEndpoints.getAllDespesas,
);

router.post(
  '/despesa/synced',
  validator(schemas.updateClienteSynced, ValidationSource.BODY),
  EntitiesEndpoints.setDespesasAsSynced,
);

export default router;
