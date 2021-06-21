import express from 'express';
import { PublicRequest } from 'app-request';
import schema from '../schemas/auth';
import validator, { ValidationSource } from '../../helpers/validator';
import asyncHandler from '../../helpers/asyncHandler';

const router = express.Router();

export default router.use(
  validator(schema.apiKey, ValidationSource.HEADER),
  asyncHandler(async (req: PublicRequest, res, next) => {
    req.apiKey = req.headers['x-api-key'].toString();

    // if (req.apiKey !== 'app-api-key') throw new ForbiddenError();

    // const apiKey = await ApiKeyRepo.findByKey(req.apiKey);
    // Logger.info(apiKey);

    // if (!apiKey) throw new ForbiddenError();
    return next();
  }),
);
